(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .factory('CartService', CartService);

    function CartService($rootScope, $mdDialog) {

        var matchModifiersAndAddItem = function(item, modifiersArray, quantity) {

            var itemMatchedFlag = false;

            $rootScope.cartItemObject.elements.forEach(function(cartItem, cartItemIndex){

                //checking for the item is present or not
                if(cartItem.id == item.id && !itemMatchedFlag) {

                    //item is present, now checking for the modifier length
                    if(cartItem.modifiers.length == modifiersArray.length) {

                        //for checking if the modifiers length is 0
                        //if it is 0 then we have to add/update that item directly to the cart
                        if(cartItem.modifiers.length == 0) {

                            //call is done for adding item
                            $rootScope.cartItemObject.elements[cartItemIndex].qty = $rootScope.cartItemObject.elements[cartItemIndex].qty + quantity;
                            $rootScope.cartItemObject.elements[cartItemIndex].cost = $rootScope.cartItemObject.elements[cartItemIndex].price * $rootScope.cartItemObject.elements[cartItemIndex].qty;
                            $mdDialog.hide();
                            return;
                        }//end of length 0 checking if

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
                                                addNewItemToCartObjects(item, 'update', quantity);
                                                $mdDialog.hide();
                                                return;

                                            } else {

                                                console.log("I am in add call 1");

                                                //this call has been done for adding new item
                                                addNewItemToCartObjects(item, 'add', quantity);
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
                                addNewItemToCartObjects(item, 'update', quantity);
                                $mdDialog.hide();
                                return;
                            } else {

                                console.log("I am in add call 2");
                                addNewItemToCartObjects(item, 'add', quantity);
                                $mdDialog.hide();
                                return;    
                            }
                            
                        }
                    }
                } else {

                    //if the item is not present in the cart and the cart item list is ended then add new item to the cart
                    if(cartItemIndex == $rootScope.cartItemObject.elements.length - 1 && !itemMatchedFlag) {

                        console.log("I am in add call 3");
                        addNewItemToCartObjects(item, 'add', quantity);
                        $mdDialog.hide();
                        return;
                    }
                }
            });
        }//end of matchModifiers function

        var addNewItemToCartObjects = function(item, type, quantity) {

            console.log("Item at add item: "+JSON.stringify(item));
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
                qty: quantity,
                cost: item.price * quantity,
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
                // performCalculations();

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
                                    // performCalculations();

                                    console.log("Modifiers: "+JSON.stringify(itemObj.modifiers));
                                    $mdDialog.hide();
                                }
                            });

                        } else {
                            //this is add item call
                            $rootScope.cartItemObject.elements.push(itemObj);

                            //the below function is called for making POST call of 'validate' and get calculations
                            // performCalculations();
                            console.log("Cart item object: "+JSON.stringify($rootScope.cartItemObject.elements));
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

        return {
      
            addItemToCart: function addItemToCart(item, quantity) {

                // console.log("Cart function called."+JSON.stringify(item));
                if($rootScope.cartItemObject.elements.length == 0) {

                    // console.log("I am adding item 3");
                    console.log("I am in add call 4");
                    addNewItemToCartObjects(item, 'add', quantity);
                    $mdDialog.hide();
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
                        addNewItemToCartObjects(item, 'add', quantity);
                    }
                }); //end of forEach            
            }, //end of AddItemToCart function
        }//end of return

        //for adding items in cart by Chetan Purohit on 8th May 2016
        //this data is structured as per requirement for validate API
    }// end of CartService
})();