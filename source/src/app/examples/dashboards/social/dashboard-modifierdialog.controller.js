(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('ModifierDialogController', ModifierDialogController);

    /* @ngInject */
    function ModifierDialogController($scope, $mdDialog, $http, itemId, $rootScope) {

        var vm = this;
        vm.itemModifiers = {};
        $scope.itemid = itemId;
        $scope.quantity = 1;

        $scope.addEditButtonText = "";
        $scope.cancelDeleteButtonText = "";

        //below is the url prefix required for all the APIs
        var urlPrefix = "http://52.23.209.206:3000";

        //below object stores all the urls required to call the APIs
        var urlObject = {
            getModifierUrl: urlPrefix + "/api/v1/13HRYK02HZM30/items/"
        }

        var getModifierUrl =   urlObject.getModifierUrl + $scope.itemid.item;

        $scope.passItemToUI = function(item) {

            if($scope.itemid.cartId >= 0) {

                //this call is done for editing item

                $rootScope.cartItemObject.elements.forEach(function(cartItem) {

                    if(cartItem.cartId == $scope.itemid.cartId) {

                        // console.log("selected item: "+JSON.stringify(item));
                        var selectedItem = cartItem;

                        //for adding selected to previously selected modifiers
                        if(item.modifierGroups.elements.length > 0) {

                            item.modifierGroups.elements.forEach(function(modifierGroup, modifierGroupIndex) {

                                modifierGroup.modifiers.elements.forEach(function(modifier, modifierIndex){

                                    //for checking if the currently selected modifier is already selected or not
                                    selectedItem.modifiers.forEach(function(selectedModifier, selectedModifierIndex) {

                                        if(modifier.id == selectedModifier.id) {

                                            item.modifierGroups.elements[modifierGroupIndex].modifiers.elements[modifierIndex].selected = true;
                                        }

                                        //for checking if this is the last modifier of last modifierGroup
                                        if(item.modifierGroups.elements.length - 1 == modifierGroupIndex 
                                            && modifierGroup.modifiers.elements.length - 1 == modifierIndex 
                                            && selectedItem.modifiers.length - 1 == selectedModifierIndex) {

                                            console.log("item: "+JSON.stringify(item));
                                            item.price = selectedItem.price;
                                            vm.itemModifiers = item;
                                            $scope.itemModifiersA = item;
                                            $scope.quantity = selectedItem.qty;

                                            $scope.addEditButtonText = "Update item";
                                            $scope.cancelDeleteButtonText = "Remove from cart";
                                        }
                                    });
                                });

                            });    
                        } else {

                            //item is not having any modifiers
                            //pass only quantity
                            vm.itemModifiers = item;
                            $scope.itemModifiersA = item;
                            $scope.quantity = selectedItem.qty;
                            $scope.addEditButtonText = "Update item";
                            $scope.cancelDeleteButtonText = "Remove from cart";
                        }
                    }
                });

            } else {

                //this call is done for add item
                vm.itemModifiers = item;
                $scope.itemModifiersA = item;
                $scope.addEditButtonText = "Add to cart";
                $scope.cancelDeleteButtonText = "Cancel";
            }

        }//end of passItemToUI function

        //for deleting item from cart or closing dialog box on cancel or remove from cart button
        $scope.deleteCloseDialog = function(type) {

            if(type == "Remove from cart") {

                //cart item index can be changed after deleting some items
                //so removing items after finding the correct index
                $rootScope.cartItemObject.elements.forEach(function(cartItem, cartItemIndex) {

                    if(cartItem.cartId == $scope.itemid.cartId) {

                        $rootScope.cartItemObject.elements.splice(cartItemIndex, 1);
                    }
                });
                
                $mdDialog.hide();
            } else {

                $mdDialog.hide();
            }
        }//end of deleteCloseDialog function

        // Get call for categories 
        $http.get(getModifierUrl)
        .then(function(response) {

            $scope.passItemToUI(response.data);
        });

        //below function is used for hiding/closing dialog box
        $scope.closeDialog = function() {

            $mdDialog.hide();
        }//end of closeDialog function

        $scope.changeQty = function(type) {

            if(type == "add") {

                $scope.quantity++;
            } else {

                if($scope.quantity >= 2) {

                    $scope.quantity--;
                }
            }
        }//end of changeQty function

        //for adding and removing modifier price in item price by Chetan Purohit on 8th May 2016
        $scope.addRemoveModifier = function(itemPrice, modifier, selected) {

            var modifiedItemPrice = 0;

            if(selected) {

                //if the checkbox is selected then it will add the modifier price in the item price
                modifiedItemPrice = parseInt(itemPrice) + parseInt(modifier.price);
                return modifiedItemPrice;
            } else {

                //if the checkbox is unchecked then it
                modifiedItemPrice = parseInt(itemPrice) - parseInt(modifier.price);
                return modifiedItemPrice;
            }
        }//end of addRemoveModifier function

        var addNewItemToCartObjects = function(item, type) {

            console.log("My type is "+type);
            // console.log("Came here.");
            //here cartId is taken which can help while editing item, it is not needed in validate POST call
            //for creating object of items
            var itemObj = {
                id: item.id,
                name: item.name,
                price: item.price,
                priceType: item.priceType,
                defaultTaxRates: item.defaultTaxRates,
                qty: $scope.quantity,
                cost: item.price * $scope.quantity,
                isRevenue: item.isRevenue,
                taxRates: item.taxRates
            };

            itemObj.modifiers = [];

            //for adding cartId
            //if this is update call then assign previous cartId
            //else add new cartId
            if(type == 'update') {

                //this is an update call
                itemObj.cartId = item.cartId;
            } else {

                itemObj.cartId = $rootScope.cartItemObject.elements.length;
            }
            
            //for adding item code
            //this is optional and we are getting this from Clover
            if(item.code) {

                itemObj.code = item.code;
            } else {

                itemObj.code = "";
            }

            //for adding modifiers if item having any and selected
            if(item.modifierGroups.elements.length == 0) {

                //item is not having modifiers so directly add item to objects
                //if code is available for item then it will be added otherwise blank is set

                $rootScope.cartItemObject.elements.push(itemObj);

                // console.log("Item added to cart: "+JSON.stringify($rootScope.cartItemObject.elements));
                $mdDialog.hide();
            } else {

                var modifierGroupIndex = 0;

                //for checking all the modifier group objects
                item.modifierGroups.elements.forEach(function(modifierGroup){

                    modifierGroup.modifiers.elements.forEach(function(modifier){

                        //if the modifier is selected then add to modifiers object
                        if(modifier.selected) {

                            itemObj.modifiers.push(modifier);
                        }
                    });

                    modifierGroupIndex++;

                    //if this is the last modifier group then the item should be added to the cart item object
                    if(modifierGroupIndex == item.modifierGroups.elements.length) {

                        //if type is update then just update the item at the previous location
                        //if type is add then add the item to the last location

                        if(type == 'update') {

                            //this is an update call
                            $rootScope.cartItemObject.elements.forEach(function(cartItem, cartItemIndex) {

                                if(cartItem.cartId == itemObj.cartId) {

                                    console.log("cartItem is matched.");

                                    $rootScope.cartItemObject.elements[cartItemIndex].qty = itemObj.qty;
                                    $rootScope.cartItemObject.elements[cartItemIndex].cost = itemObj.cost;
                                    $rootScope.cartItemObject.elements[cartItemIndex].modifiers = itemObj.modifiers;

                                    console.log("Modifiers: "+JSON.stringify(itemObj.modifiers));
                                }
                            });

                        } else {

                            //this is add item call
                            $rootScope.cartItemObject.elements.push(itemObj);
                            // console.log("Item added to cart: "+JSON.stringify($rootScope.cartItemObject.elements));
                            $mdDialog.hide();    
                        }
                    }
                });
            }
            
            // $http.post(url, data)
            // .success(function(data, status, config) {
            //     // this callback will be called asynchronously
            //     // when the response is available
            //     if (typeof data === 'object') {

            //         console.log("Success of post: "+data);
            //         return deferredObj.resolve(data);
            //     } else {

            //         // invalid response
            //         console.log("invalid response");
            //         return deferredObj.reject(data);
            //     }
            // }); //end of validate API POST call

        } //end of addNewItemToCartObjects function

        $scope.checkValidationsAndAddToCart = function(item, quantity, addEditButtonText) {

            //for checking if the item is to be updated or added to the cart
            //this is done on the basis of value for the addEditButtonText
            //if the modifier dialog box is opened for adding item then the addEditButtonText holds 'Add to cart'
            //if the modifier dialog box is opened for updating item then it holds 'Update item'
    
            if(addEditButtonText == "Add to cart") {

                //this box is opened for adding item to cart

                var modifierGroupCount = item.modifierGroups.elements.length;

                //item loading in dialog box takes time. If user tries to press 'Add to cart' button before that then it should not react
                if(item.name == undefined || item.name == null || item.name == "") {

                    return;
                }

                //if item is not having any modifiergroup then item should be added to cart
                if(item.modifierGroups.elements.length == 0) {

                    $scope.AddItemToCart(item, quantity);
                }

                var modifierGroupIndex = 0;

                //item is having modifier groups, so checking minRequired and maxRequired
                item.modifierGroups.elements.forEach(function(modifierGroup, modifierGroupIndex){

                    var minimumRequired = 0;
                    var maximumAllowed = 0;

                    // console.log("Came here 1");

                    if(modifierGroup.minRequired != null || modifierGroup.minRequired != undefined || modifierGroup.minRequired != "") {

                        // console.log("Came here 2");
                        var minimumRequired = modifierGroup.minRequired;    
                    }

                    if(modifierGroup.maxAllowed != null || modifierGroup.maxAllowed != undefined || modifierGroup.maxAllowed != "") {

                        // console.log("Came here 3");
                        var maximumAllowed = modifierGroup.maxAllowed;    
                    }

                    if(minimumRequired > 0 || maximumAllowed > 0) {

                        // console.log("Came here 4");
                        var modifiersCount = modifierGroup.modifiers.elements.length;

                        var modifierIndex = 0;
                        var selectedCount = 0;

                        modifierGroup.modifiers.elements.forEach(function(modifier){

                            // console.log("Came here 5");
                            
                            //for counting number of selected modifiers
                            if(modifier.selected) {

                                // console.log("Came here 6");
                                selectedCount++;
                            }

                            //for validating number of selected modifiers are satisfying minRequired and maxRequired or not
                            modifierIndex++;

                            if(modifiersCount == modifierIndex) {

                                // console.log("Came here 7");
                                if(minimumRequired > 0 && minimumRequired > selectedCount) {

                                    return;
                                }

                                if(maximumAllowed > 0 && maximumAllowed < selectedCount) {

                                    return;
                                }

                                modifierGroupIndex++;

                                // console.log("Minimum requirement: "+minimumRequired);
                                // console.log("Maximum allowed: "+maximumAllowed);

                                //if modifier selection is proper then add that item to the cart
                                if(modifierGroupCount == modifierGroupIndex) {

                                    // console.log("Calling add item");
                                    $scope.AddItemToCart(item, quantity);
                                }
                            }
                        });
                    } else {

                        //if item is not having any restriction on modifier selection
                        if(item.modifierGroups.elements.length-1 == modifierGroupIndex) {
                            
                            // console.log("Calling add item2");
                            $scope.AddItemToCart(item, quantity);    
                        }
                        
                    }
                });
            } else {

                //this box is opened for updating item in the cart

                //check if the modifiergroup exist or not
                //if not then just update the quantity
                if(item.modifierGroups.elements.length == 0) {

                    $rootScope.cartItemObject.elements[$scope.itemid.cartId].qty = quantity;
                    $rootScope.cartItemObject.elements[$scope.itemid.cartId].cost = $rootScope.cartItemObject.elements[$scope.itemid.cartId].price * quantity;
                    $mdDialog.hide();
                } else {

                    //item has modifiers, so now check modifiers are same as previous or not
                    //if modifiers are not changed then update quantity
                    //if modifiers are changed then find the if the same item with latest selected modifiers is available in the cart
                    //if available then add quantity of updated item to that item and delete updated item from cart
                    //if not available any matching item to cart then update old item
                    item.cartId = $scope.itemid.cartId;
                    $scope.AddItemToCart(item, quantity);
                }
            }
            
        }

        var matchModifiersAndAddItem = function(item, modifiersArray, quantity) {

            var itemMatchedFlag = false;

            $rootScope.cartItemObject.elements.forEach(function(cartItem, cartItemIndex){

                //checking for the item is present or not
                if(cartItem.id == item.id && !itemMatchedFlag) {

                    //item is present, now checking for the modifier length
                    if(cartItem.modifiers.length == modifiersArray.length) {

                        //for saving the number of modifiers matching
                        var matchedCount = 0;

                        //now checking for the modifiers
                        modifiersArray.forEach(function(itemModifier, itemModifierIndex) {

                            //this flag will be set to true if the modifier is found
                            var modifierFoundFlag = false;

                            if(!modifierFoundFlag) {

                                cartItem.modifiers.forEach(function(cartModifier, cartModifierIndex){

                                    if(itemModifier.id == cartModifier.id) {

                                        modifierFoundFlag = true;
                                        matchedCount++;
                                        
                                        //if matchedCount is equal to number of modifiers then just increase the quantity
                                        if(matchedCount == modifiersArray.length) {

                                            itemMatchedFlag = true;

                                            //for checking if the item is to be updated or added
                                            //this is identified by checking whether item is having cartId or not
                                            //if having cartId then just update item as per update conditions
                                            if(item.cartId >= 0) {

                                                if(item.cartId == cartItem.cartId) {

                                                    //item has no change for modifiers
                                                    //only update the quantity and price
                                                    $rootScope.cartItemObject.elements[cartItemIndex].qty = quantity;
                                                    $rootScope.cartItemObject.elements[cartItemIndex].cost = $rootScope.cartItemObject.elements[cartItemIndex].price * quantity;
                                                    $mdDialog.hide();
                                                } else {

                                                    //item is not the same item which was previously added and opened for update
                                                    //changed modifiers is similar to another item
                                                    //so just add the quantity to that matching item and updated the price
                                                    //delete the selected item to update
                                                    $rootScope.cartItemObject.elements[cartItemIndex].qty = $rootScope.cartItemObject.elements[cartItemIndex].qty + quantity;
                                                    $rootScope.cartItemObject.elements[cartItemIndex].cost = $rootScope.cartItemObject.elements[cartItemIndex].price * $rootScope.cartItemObject.elements[cartItemIndex].qty;
                                                    $scope.deleteCloseDialog('Remove from cart');
                                                    $mdDialog.hide();
                                                    return;
                                                }
                                            } else {

                                                //call is done for adding item
                                                $rootScope.cartItemObject.elements[cartItemIndex].qty = $rootScope.cartItemObject.elements[cartItemIndex].qty + quantity;
                                                $rootScope.cartItemObject.elements[cartItemIndex].cost = $rootScope.cartItemObject.elements[cartItemIndex].price * $rootScope.cartItemObject.elements[cartItemIndex].qty;
                                                $mdDialog.hide();
                                                return;
                                            }
                                        }
                                    } else if(cartItemIndex == $rootScope.cartItemObject.elements.length - 1 
                                        && cartModifierIndex == cartItem.modifiers.length - 1 
                                        && !itemMatchedFlag  && modifiersArray.length - 1 == itemModifierIndex) {

                                        //if item is not found in the cart then add that item in the cart
                                        if(matchedCount != modifiersArray.length) {

                                            //for handling situation of update item
                                            if(item.cartId >= 0) {

                                                //this call has been done for update
                                                addNewItemToCartObjects(item, 'update');
                                                $mdDialog.hide();
                                                return;

                                            } else {

                                                console.log("I am in add call 1");

                                                //this call has been done for adding new item
                                                addNewItemToCartObjects(item, 'add');
                                                $mdDialog.hide();
                                                return;
                                            }
                                        }
                                    }
                                });
                            } 
                        });//end of cartItem modifiers forEach loop
                    } else {

                        //if items modifiers length is not matching and this is the last item then add/update item to the cart
                        if(cartItemIndex == $rootScope.cartItemObject.elements.length - 1) {

                            if(item.cartId >= 0) {

                                //this call has been done for update
                                addNewItemToCartObjects(item, 'update');
                                $mdDialog.hide();
                                return;
                            } else {

                                console.log("I am in add call 2");
                                addNewItemToCartObjects(item, 'add');
                                return;    
                            }
                            
                        }
                    }
                } else {

                    //if the item is not present in the cart and the cart item list is ended then add new item to the cart
                    if(cartItemIndex == $rootScope.cartItemObject.elements.length - 1 && !itemMatchedFlag) {

                        console.log("I am in add call 3");
                        addNewItemToCartObjects(item, 'add');
                        return;
                    }
                }
            });
        }

        //for adding items in cart by Chetan Purohit on 8th May 2016
        //this data is structured as per requirement for validate API
        $scope.AddItemToCart = function(item, quantity) {

            // console.log("Cart function called."+JSON.stringify(item));
            if($rootScope.cartItemObject.elements.length == 0) {

                // console.log("I am adding item 3");
                console.log("I am in add call 4");
                addNewItemToCartObjects(item, 'add');
                return;
            }

            //for checking if the minimum and maximum modifiers are selected or not

            //if there are some items then check the presence
            var cartItemIndex = 0;
            var matchingItemFoundFlag = false;
            var itemFound = false;

            $rootScope.cartItemObject.elements.forEach(function(cartItem){

                if(cartItem.id == item.id && !matchingItemFoundFlag) {

                    matchingItemFoundFlag = true;

                    //item is present
                    if(item.modifierGroups.elements.length == 0) {

                        //item is not having modifiers so simply increase the quantity
                        $rootScope.cartItemObject.elements[cartItemIndex].qty = $rootScope.cartItemObject.elements[cartItemIndex].qty + quantity;
                        $rootScope.cartItemObject.elements[cartItemIndex].cost = $rootScope.cartItemObject.elements[cartItemIndex].price * $rootScope.cartItemObject.elements[cartItemIndex].qty;
                        $mdDialog.hide();
                        return;
                    } else {

                        var modifiersArray = [];

                        // console.log("item with modifiers 1");

                        //adding modifiers to an array for matching with the existing items in the cart
                        item.modifierGroups.elements.forEach(function(modifierGroup, modifierGroupIndex){

                            // console.log("item with modifiers 2"+modifierGroupIndex);

                            modifierGroup.modifiers.elements.forEach(function(modifier, modifierIndex){

                                // console.log("item with modifiers 3");
                                // console.log("Entered here: "+modifierIndex);
                                if(modifier.selected) {

                                    modifiersArray.push(modifier);
                                }//end of modifier selected checking if

                                //for checking if all the modifiers are iterated or not for modifierGroup
                                if(modifierIndex == modifierGroup.modifiers.elements.length - 1 && modifierGroupIndex == item.modifierGroups.elements.length - 1) {

                                    console.log("I am calling match and add.");
                                    matchModifiersAndAddItem(item, modifiersArray, quantity);
                                }//end of modifiers ended or not checking if
                            });//end of modifers forEach for every modifierGroup
                        });//end of modifierGroups forEach
                    }
                }

                cartItemIndex++;

                if(cartItemIndex == $rootScope.cartItemObject.elements.length && !matchingItemFoundFlag) {

                    // console.log("I am adding item 5");
                    addNewItemToCartObjects(item);
                }
            }); //end of forEach            
        }//end of AddItemToCart function
    }
})();
