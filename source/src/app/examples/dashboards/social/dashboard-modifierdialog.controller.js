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

        var getModifierUrl =   "http://52.23.209.206:3000/api/v1/13HRYK02HZM30/items/" + $scope.itemid.item;

        // Get call for categories 
        $http.get(getModifierUrl)
        .then(function(response) {
            console.log("Got the response");
            vm.itemModifiers = response.data;
            $scope.itemModifiersA = response.data;

            console.log("Modifiers: "+JSON.stringify(vm.itemModifiers.modifierGroups.elements));
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

                    console.log("QUANTITY: "+$scope.quantity);
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

        var addNewItemToCartObjects = function(item) {

            console.log("Came here.");
            //here cartId is taken which can help while editing item, it is not needed in validate POST call
            //for creating object of items
            var itemObj = {
                cartId: $rootScope.cartItemObject.elements.length,
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

                console.log("Item added to cart: "+JSON.stringify($rootScope.cartItemObject.elements));
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

                        $rootScope.cartItemObject.elements.push(itemObj);
                        console.log("Item added to cart: "+JSON.stringify($rootScope.cartItemObject.elements));
                        $mdDialog.hide();
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

        $scope.checkValidationsAndAddToCart = function(item, quantity) {

            var modifierGroupCount = item.modifierGroups.elements.length;

            //item loading in dialog box takes time. If user tries to press 'Add to cart' button before that then it should not react
            if(item.name == undefined || item.name == null || item.name == "") {

                return;
            }

            //if item is not having any modifiergroup then it should add that item
            if(item.modifierGroups.elements.length == 0) {

                $scope.AddItemToCart(item, quantity);
            }

            var modifierGroupIndex = 0;

            //item is having modifier groups, so checking minRequired and maxRequired
            item.modifierGroups.elements.forEach(function(modifierGroup){

                var minimumRequired = 0;
                var maximumAllowed = 0;

                console.log("Came here 1");

                if(modifierGroup.minRequired != null || modifierGroup.minRequired != undefined || modifierGroup.minRequired != "") {

                    console.log("Came here 2");
                    var minimumRequired = modifierGroup.minRequired;    
                }

                if(modifierGroup.maxAllowed != null || modifierGroup.maxAllowed != undefined || modifierGroup.maxAllowed != "") {

                    console.log("Came here 3");
                    var maximumAllowed = modifierGroup.maxAllowed;    
                }

                if(minimumRequired > 0 || maximumAllowed > 0) {

                    console.log("Came here 4");
                    var modifiersCount = modifierGroup.modifiers.elements.length;

                    var modifierIndex = 0;
                    var selectedCount = 0;

                    modifierGroup.modifiers.elements.forEach(function(modifier){

                        console.log("Came here 5");
                        

                        //for counting number of selected modifiers
                        if(modifier.selected) {

                            console.log("Came here 6");
                            selectedCount++;
                        }

                        //for validating number of selected modifiers are satisfying minRequired and maxRequired or not
                        modifierIndex++;

                        if(modifiersCount == modifierIndex) {

                            console.log("Came here 7");
                            if(minimumRequired > 0 && minimumRequired > selectedCount) {

                                return;
                            }

                            if(maximumAllowed > 0 && maximumAllowed < selectedCount) {

                                return;
                            }

                            modifierGroupIndex++;

                            console.log("Minimum requirement: "+minimumRequired);
                            console.log("Maximum allowed: "+maximumAllowed);

                            //if modifier selection is proper then add that item to the cart
                            if(modifierGroupCount == modifierGroupIndex) {

                                console.log("Calling add item");
                                $scope.AddItemToCart(item, quantity);
                            }
                        }
                    });
                } else {

                    //if item is not having any restriction on modifier selection
                    console.log("Calling add item2");
                    $scope.AddItemToCart(item, quantity);
                }

            });

        }

        //for adding items in cart by Chetan Purohit on 8th May 2016
        //this data is structured as per requirement for validate API
        $scope.AddItemToCart = function(item, quantity) {

            console.log("Cart function called."+JSON.stringify(item));

            if($rootScope.cartItemObject.elements.length == 0) {

                addNewItemToCartObjects(item);
                return;
            }

            //for checking if the minimum and maximum modifiers are selected or not

            //if there are some items then check the presence
            var cartItemIndex = 0;

            $rootScope.cartItemObject.elements.forEach(function(cartItem){

                if(cartItem.id == item.id) {

                    //item is present
                    if(item.modifierGroups.elements.length == 0) {

                        //item is not having modifiers so simply increase the quantity
                        $rootScope.cartItemObject.elements[cartItemIndex].qty = $rootScope.cartItemObject.elements[cartItemIndex].qty + quantity;
                        $rootScope.cartItemObject.elements[cartItemIndex].cost = $rootScope.cartItemObject.elements[cartItemIndex].price * $rootScope.cartItemObject.elements[cartItemIndex].qty;
                        $mdDialog.hide();
                        return;
                    } else {

                        //item is having some modifiers so check the presence according to modifers
                        item.modifierGroups.elements.forEach(function(modifierGroup){

                            modifierGroup.modifiers.elements.forEach(function(modifier){

                                //if the modifier is selected then check the presence
                                if(modifier.selected) {

                                    var isModifierFound = false;
                                    var modifierIndex = 0;

                                    $rootScope.cartItemObject.elements[cartItemIndex].modifiers.forEach(function(itemModifier){

                                        if(itemModifier.id == modifier.id && itemModifier.modifierGroup.id == modifierGroup.id) {

                                            isModifierFound = true;
                                            $rootScope.cartItemObject.elements[cartItemIndex].qty++;
                                            $rootScope.cartItemObject.elements[cartItemIndex].cost = $rootScope.cartItemObject.elements[cartItemIndex].price * $rootScope.cartItemObject.elements[cartItemIndex].qty;
                                        }

                                        modifierIndex++;

                                        if(modifierIndex == $rootScope.cartItemObject.elements[cartItemIndex].modifiers.length) {

                                            //if this is the last modifier in the added items and selected modifier is not found then add that item
                                            if(!isModifierFound) {

                                                addNewItemToCartObjects(item);
                                                return;
                                            }
                                        }
                                    });
                                }
                            });
                        });//end of modifierGroup forEach
                    }
                }

                cartItemIndex++;

                if(cartItemIndex == $rootScope.cartItemObject.elements.length) {

                    addNewItemToCartObjects(item);
                }
            }); //end of forEach            
        }//end of AddItemToCart function
    }
})();
