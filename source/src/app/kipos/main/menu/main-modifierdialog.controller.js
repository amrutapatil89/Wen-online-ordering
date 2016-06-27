(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('ModifierDialogController', ModifierDialogController);

    /* @ngInject */
    function ModifierDialogController($scope, $mdDialog, $http, itemId, $rootScope, DataService, CartService, API_CONFIG) {

        var vm = this;
        vm.itemModifiers = {};
        $scope.itemid = itemId;
        $scope.quantity = 1;

        $scope.addEditButtonText = "";
        $scope.cancelDeleteButtonText = "";

        //below object stores all the urls required to call the APIs
        var urlObject = {
            getModifierUrl: API_CONFIG.url + $rootScope.merchantId + "/items/" + $scope.itemid.item,
            validate: API_CONFIG.url + $rootScope.merchantId + "/orders/validate"
        }

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
        $http.get(urlObject.getModifierUrl)
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
        $scope.addRemoveModifier = function(item, modifier, selected) {

            console.log("Item: "+JSON.stringify(item));
            console.log("Modifier: "+JSON.stringify(modifier));

            var modifiedItemPrice = 0;

            if(selected) {

                //if the checkbox is selected then it will add the modifier price in the item price
                if(item.cost >= 0) {

                    modifiedItemPrice = parseInt(item.cost) + parseInt(modifier.price);    
                } else {

                    modifiedItemPrice = parseInt(item.price) + parseInt(modifier.price);
                }
                
                console.log("Modified price: "+modifiedItemPrice);
                return modifiedItemPrice;
            } else {

                //if the checkbox is unchecked then it
                if(item.cost >= 0) {

                    modifiedItemPrice = parseInt(item.cost) - parseInt(modifier.price);    
                } else {

                    modifiedItemPrice = parseInt(item.price) - parseInt(modifier.price);
                }
                console.log("Modified price: "+modifiedItemPrice);
                return modifiedItemPrice;
            }
        }//end of addRemoveModifier function

        //below function will make 'validate' API call for the items present in the cart
        //it will get all the calculations done from the middle tear server for the items
        //we will use these calculations to display on the UI as well as for the POST order call
        //this function is written by Chetan Purohit on 7th May 2016
        var performCalculations = function() {

            var lineItemsArray = [];
            var count = 1;
            var cartItemLength = $rootScope.cartItemObject.elements.length;

            console.log("Cart length: "+cartItemLength);

            //preparing object(payload) to send for validate API call
            //for preparing lineItems we have to separate each and every quantity of the item in an array
            $rootScope.cartItemObject.elements.forEach(function(cartItem, cartItemIndex) {

                //creating lineItemObject for every item
                //it will be added quantity time in the array later
                var lineItemObject = {
                    "id": cartItem.id,
                    "name": cartItem.name,
                    "code": cartItem.code,
                    "price": cartItem.price,
                    "priceType": cartItem.priceType,
                    "defaultTaxRates": cartItem.defaultTaxRates,
                    "cost": cartItem.cost,
                    "isRevenue": cartItem.isRevenue,
                    "taxRates": cartItem.taxRates
                };

                //for adding modifiers of the object if any are available
                if(cartItem.modifiers.length > 0) {

                    //for removing the 'selected' field from modifiers object as Clover is not accepting it
                    for(var index = 0; index < cartItem.modifiers.length; index++) {

                        delete cartItem.modifiers[index].selected;

                        if(index == cartItem.modifiers.length - 1) {

                            lineItemObject.modifiers = {};
                            lineItemObject.modifiers.elements  = [];
                            lineItemObject.modifiers.elements  = cartItem.modifiers;
                        }
                    }
                }

                //following for loop will add the item quantity times in the lineItems array
                for(var index = 0; index < cartItem.qty; index++) {

                    count = count + 1;

                    lineItemsArray.push(lineItemObject);

                    //if this is the last item in the cart and the last quantity index then we have to make object
                    //and we have to call 'validate' API
                    if(cartItemIndex == $rootScope.cartItemObject.elements.length - 1 && index == cartItem.qty - 1) {

                        //for creating object to call validate API
                        var validateObject = {

                            "orderTypeId":"0GKGA85CK06WG",
                            "lineItems": lineItemsArray
                        };

                        console.log("Validate Payload: "+JSON.stringify(validateObject));

                        //making 'validate' API POST call from here
                        DataService.postData(urlObject.validate, validateObject)
                        .then(function(data){

                        });
                    }//end of if condition
                }//end of for
            });//end of cartItem forEach loop
        }//end of performCalculations function

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

                    CartService.addItemToCart(item, $scope.quantity);
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
                                    CartService.addItemToCart(item, $scope.quantity);
                                }
                            }
                        });
                    } else {

                        //if item is not having any restriction on modifier selection
                        if(item.modifierGroups.elements.length-1 == modifierGroupIndex) {
                            
                            // console.log("Calling add item2");
                            CartService.addItemToCart(item, $scope.quantity);    
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
                    CartService.addItemToCart(item, $scope.quantity);
                }
            }   
        }
    }
})();
