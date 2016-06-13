(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DashboardSocialController', DashboardSocialController);

    /* @ngInject */
    function DashboardSocialController($scope, $http, $mdDialog, $rootScope) {
        var vm = this;

        //for initializing cartItemObject for storing added items with modifiers and taxes
        $rootScope.cartItemObject = {};
        $rootScope.cartItemObject.elements = [];
        $rootScope.orderPrice = 0;

        //below is the url prefix required for all the APIs
        var urlPrefix = "http://52.23.209.206:3000";

        $rootScope.merchantId = "13HRYK02HZM30";

        //below object stores url for API calls
        var urlObject = {
            merchant: urlPrefix + "/api/v1/" + $rootScope.merchantId,
            categories: urlPrefix + "/api/v1/" + $rootScope.merchantId + "/categories",
            items: urlPrefix + "/api/v1/" + $rootScope.merchantId + "/items",
            store: urlPrefix + "/api/v1/apps/E1xXpZUkdg",
            discount: "http://52.23.209.206:3001/api/v1/KE91B9500TF28/valid_discounts",
            stores: urlPrefix + "/api/v1/accounts/4y_TUf5Wl/merchants"
        };

        vm.categories = [];
        vm.items = [];
        vm.cartItems = [];
        vm.createDialog = createDialog;
        vm.storeHours=[{"name":"Monday","hours":[{"start":"10.00","end":"11.30"}]},{"name":"Tuesday"},{"name":"Wednesday"},{"name":"Thursday"},{"name":"Friday"},{"name":"Saturday"},{"name":"Sunday"}];
        vm.paymentTypes=[{"name":"CREDIT CARD"},{"name":"CASH"}]
        vm.offers= [];

        $scope.selectedCategory = "";

        $http.get(urlObject.merchant)
        .then(function(response) {
            $rootScope.merchantInfo = response.data;
        });

        // Get call for categories 
        $http.get(urlObject.categories)
        .then(function(response) {
            vm.categories = response.data.elements;
        });

        // Get call for items 
        $http.get(urlObject.items)
        .then(function(response) {
            vm.items = response.data.elements;
        });

        //for getting store name and description
        $http.get(urlObject.store)
        .then(function(appInfo) {
            $scope.appDetails = appInfo;
            console.log("App Details: "+JSON.stringify($scope.appDetails));
        });
        

        // Getting offers 
        $http.get(urlObject.discount)
        .then(function(appInfo) {
            vm.offers = appInfo.data.elements;
            console.log("Offers Details: "+JSON.stringify(vm.offers));
        });


        //Login dialog box
        $scope.createLoginDialog = function($event) {

            console.log("create dialog called.");

            //this call has been done for adding item, so simply passing the item to dialog box
            $mdDialog.show({
                controller: 'LoginDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/dashboards/social/login-dialog.tmpl.html',
                targetEvent: $event,
                focusOnOpen: false

            });    
        }


        $scope.openLocationsDialog = function($event) {

            console.log("create locations dialog called.");

            //this call has been done for adding item, so simply passing the item to dialog box
            $mdDialog.show({
                controller: 'LocationsDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/dashboards/social/dashboard-locationsdialog.html',
                targetEvent: $event,
                focusOnOpen: false

            });   
        }

        // Dialog box for modifiers
        function createDialog($event, itemId, type) {

            console.log("type: "+type);

            //type is used for checking if the dialog has to be created for add item or edit item
            if(type == "add") {

                console.log("In add call.");
                //this call has been done for adding item, so simply passing the item to dialog box
                $mdDialog.show({
                    controller: 'ModifierDialogController',
                    controllerAs: 'vm',
                    templateUrl: 'app/examples/dashboards/social/modifier-dialog.tmpl.html',
                    targetEvent: $event,
                    focusOnOpen: false,
                    locals: { 
                        itemId: {
                            item : itemId
                        }
                    }

                });    
            } else {

                //this call has been done for editing item
                //so item should have all the original details + already selected modifiers and quantity details

                console.log("In edit call.");

                //for getting itemId from cartItemId

                $rootScope.cartItemObject.elements.forEach(function(cartItem, cartItemIndex) {

                    if(cartItem.cartId == itemId) {

                        var selectedItemId = cartItem.id;

                        //this call has been done for adding item, so simply passing the item to dialog box
                        $mdDialog.show({
                            controller: 'ModifierDialogController',
                            controllerAs: 'vm',
                            templateUrl: 'app/examples/dashboards/social/modifier-dialog.tmpl.html',
                            targetEvent: $event,
                            focusOnOpen: false,
                            locals: { 
                                itemId: {
                                    item : selectedItemId,
                                    cartId: itemId
                                }
                            }
                        }); 
                    }
                });
            }
        }

        $http.get(urlObject.items + "/0PKNFRAEP3524")
        .then(function(response) {
            vm.cartItems[0] = response.data;
            // console.log(JSON.stringify(vm.cartItems[0]));
        });

        $http.get(urlObject.items + "/S7XYK7VEYKN04")
        .then(function(response) {
            vm.cartItems[1] = response.data;
            // console.log(JSON.stringify(vm.cartItems[0]));
        });

        //for setting selected category
        $scope.setSelectedCategory = function(categoryId) {

            $scope.selectedCategory = categoryId;
        }

    // filter all fields using common text box. 
    $scope.sortItemsCategoryWise = function(row) {

        var categoryCount = row.categories.elements.length;
        var categoryIndex = 0;

        //In case All Categories is selcted return all of the categories
        if($scope.selectedCategory == "") {
            return row;
        }
        else if (row.categories.elements.length != 0) {

            // checking selected category with multiple categories 
            // associated with item
            // In case it is available return the row otherwise do nothing
            for (var i = 0; i < row.categories.elements.length; i++) {
                var category = {};
                category.id = row.categories.elements[i].id;
                if(category.id == $scope.selectedCategory){
                    return (row);  
                    break;                    
                }
            }  
        }  
    } //end of sortItemsCategoryWise function

    //for deleting item from cart or closing dialog box on cancel or remove from cart button
    $scope.deleteItemFromCart = function(cartItemId) {

        //cart item index can be changed after deleting some items
        //so removing items after finding the correct index
        $rootScope.cartItemObject.elements.forEach(function(cartItem, cartItemIndex) {

            if(cartItem.cartId == cartItemId) {

                $rootScope.cartItemObject.elements.splice(cartItemIndex, 1);
            }
        });
        
        $mdDialog.hide();
    }//end of deleteCloseDialog function

        vm.whotofollow = [{
            name: 'Twitch',
            user: 'twitch',
            avatar: 'assets/images/avatars/avatar-1.png'
        },{
            name: 'MaterialUp',
            user: 'materialUP',
            avatar: 'assets/images/avatars/avatar-3.png'
        },{
            name: 'Bower',
            user: 'bower',
            avatar: 'assets/images/avatars/avatar-2.png'
        }];

        vm.trends = [
            '#DescribeTwitterIn3Words',
            '#OhNoHarry',
            '#mnimonio3',
            '#WeForgiveYouAriana',
            '#FifthHarmonyTODAY',
            'Omar Sharif',
            'Go Set a Watchman',
            'Ηρωδειο',
            'Ryanair',
            'Η ΕΡΤ'
        ];

        vm.favorites = [{
            name: 'Twitch',
            avatar: 'assets/images/avatars/avatar-1.png',
            user: 'twitch',
            date: moment().subtract(1, 'hour'),
            tweet: 'We had an absolute blast bringing @E3 to you this year. Check out our video recap.'
        },{
            name: 'PixelBucket',
            avatar: 'assets/images/avatars/avatar-2.png',
            user: 'twitch',
            date: moment().subtract(1, 'days'),
            tweet: 'Turn a Pencil Sketch Into a Colorful and Dynamic Character Illustration http://bit.ly/1HoJhbN  @TutsPlusDesign'
        },{
            name: 'Webdesigntuts',
            avatar: 'assets/images/avatars/avatar-3.png',
            user: 'wdtuts',
            date: moment().subtract(2, 'days'),
            tweet: '100 people have entered our challenge to win @CodePen & @envatomarket goodies! 2 days left :) http://ow.ly/PqjP9'
        },{
            name: 'BestCSS',
            avatar: 'assets/images/avatars/avatar-4.png',
            user: 'bestcss',
            date: moment().subtract(3, 'days'),
            tweet: '#Site of the Day'
        },{
            name: 'MaterialUP',
            avatar: 'assets/images/avatars/avatar-5.png',
            user: 'materialup',
            date: moment().subtract(4, 'days'),
            tweet: 'OnePlus One Mockup PSD - Mockup by @zerpixelung'
        },{
            name: 'Webdesigner Depot',
            avatar: 'assets/images/avatars/avatar-6.png',
            user: 'DesignerDepot',
            date: moment().subtract(7, 'days'),
            tweet: 'Semantic UI 2.0: Design beautiful websites quicker http://depot.ly/Pq6oC'
        }];
    }
})();