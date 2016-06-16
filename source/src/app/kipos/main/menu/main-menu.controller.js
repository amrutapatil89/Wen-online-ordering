(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('MainMenuController', MainMenuController);

    /* @ngInject */
    function MainMenuController($scope, $q, $timeout, $mdToast, $mdDialog, $rootScope, $state, $location, $http, API_CONFIG, DataService, MerchantService) {
       
        var vm = this;

        // Data objects 
        vm.merchant;
        vm.brandingInfo;

        // Functions
        vm.fetchCategories          = fetchCategories;
        vm.fetchItems               = fetchItems;
        vm.createDialog             = createDialog;
        vm.getMerchantData          = getMerchantData;

        // Arrays 
        vm.categories               = [];
        vm.items                    = [];
        vm.cartItems                = [];

        // Loading indicators
        vm.loadingCategories;
        vm.loadingItems;
        vm.loadingCart;
        vm.loadingCartUpdate;
        vm.loadingCartcalculations;
        vm.loadingOffersApplied;
        vm.loadingBranding;
        vm.loadingPaymentInProgress;

        // UI Error messages toggle
        vm.errorInCategories;
        vm.loadingItems;
        vm.loadingCart;
        vm.loadingCartUpdate;
        vm.loadingCartcalculations;
        vm.loadingOffersApplied;
        vm.loadingBranding;
        vm.loadingPaymentInProgress;


        // Default error messages
        $rootScope.categoryErrorMessage    = "Could not fetch categories. Please try again";
        $rootScope.itemErrorMessage        = "Could not fetch items. Please try again";


        // Initial service call
        vm.getMerchantId    = MerchantService.getMerchantId();

        // Only after the merchant id fetch initial merchant Information 
        vm.getMerchantId.then(function(id){
            $rootScope.merchantId = id;
            vm.getMerchantData(id);
        });

        // Once initial merchant information is received 
        // fetch :
        //          - Categories
        //          - Items
        //          - Account Information
        //          - Branding Information


        function getMerchantData(id){
            MerchantService.getMerchantData(id).then(function(result){

                // Merchant data is received 
                vm.merchant = result;
                
                // FETCH FUNCTIONS

                // Fetch categories 
                vm.fetchCategories(API_CONFIG.url + $rootScope.merchantId + "/categories");
                // Fetch items
                vm.fetchItems(API_CONFIG.url + $rootScope.merchantId + "/items");
                // Fetch Branding


            });
        }

        // function to fetch categories
        function fetchCategories(url){

             vm.loadingCategories = true;
            
            // Directly assigning value to categories object 
            // as there are no dependency on other calls;
            DataService.getData(url)
            .then(function(categories){
                vm.categories = categories.elements;
            })
            .catch(function(){
                vm.loadingCategories = false;
                return $rootScope.categoryErrorMessage;
            });

        }// end of fetchCategories

        // function to fetch items
        function fetchItems(url){

            // Directly assigning value to items object 
            // as there are no dependency on other calls;
            DataService.getData(url)
            .then(function(items){
                vm.items = items.elements;
            })
            .catch(function(){
                return $rootScope.itemsErrorMessage;
            });

        }// end of fetchItems







        //for initializing cartItemObject for storing added items with modifiers and taxes
        $rootScope.cartItemObject = {};
        $rootScope.cartItemObject.elements = [];
        $rootScope.orderPrice = 0;
        $scope.weeks=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

        //below is the url prefix required for all the APIs
        var urlPrefix = "http://52.23.209.206:3000";

        // $rootScope.merchantId = "13HRYK02HZM30";

        //below object stores url for API calls
        var urlObject = {
            merchant: urlPrefix + "/api/v1/" + $rootScope.merchantId,
            categories: urlPrefix + "/api/v1/" + $rootScope.merchantId + "/categories",
            items: urlPrefix + "/api/v1/" + $rootScope.merchantId + "/items",
            store: urlPrefix + "/api/v1/apps/E1xXpZUkdg",
            discount: urlPrefix + "/api/v1/" + $rootScope.merchantId + "/valid_discounts",
            stores: urlPrefix + "/api/v1/accounts/4y_TUf5Wl/merchants",
            ordertypes: urlPrefix+ "/api/v1/"+$rootScope.merchantId +"/order_types"
        };


        vm.storeHours=[{"name":"Monday","hours":[{"start":"100","end":"1130"}]},{"name":"Tuesday","hours":[{"start":"1400","end":"1130"}]},{"name":"Wednesday"},{"name":"Thursday"},{"name":"Friday"},{"name":"Saturday"},{"name":"Sunday"}];
        vm.paymentTypes=["CASH"];

        vm.offers= [];
        vm.orderTypes={};
        vm.orderTypes.businessHours =[];

        $scope.selectedCategory = "";

        $http.get(urlObject.merchant)
        .then(function(response) {

            $rootScope.merchantInfo = response.data;

            // Identifying order type and storing respective details in objects
            angular.forEach(response.data.jsonData.opening_hours.elements, function(value, key) {

                    // Parsing store hours and storing it in array
                    angular.forEach(value, function(value, key) {

                        // Valdiation to get only week related details
                        if ($scope.weeks.indexOf(key) > -1){

                            var hoursObject={};
                            hoursObject.name = key.toUpperCase();
                            hoursObject.hours = value.elements;

                            //Pushing store timing details in array for displaying on UI
                            vm.orderTypes.businessHours.push(hoursObject);

                        }

                    });

            }); // End of for each

            // Assigning the payment types supported by merchant
            vm.paymentTypes = response.data.paymentType;

        });

        //for getting store name and description
        $http.get(urlObject.store)
        .then(function(appInfo) {
            $scope.appDetails = appInfo;
            //console.log("App Details: "+JSON.stringify($scope.appDetails));
        });
        

        //Login dialog box
        $scope.createLoginDialog = function($event) {

            console.log("create dialog called.");

            //this call has been done for adding item, so simply passing the item to dialog box
            $mdDialog.show({
                controller: 'LoginDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/kipos/main/login/login-dialog.tmpl.html',
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
                templateUrl: 'app/kipos/main/menu/main-locationsdialog.html',
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
                    templateUrl: 'app/kipos/main/menu/modifier-dialog.tmpl.html',
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
                            templateUrl: 'app/kipos/main/menu/modifier-dialog.tmpl.html',
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

        // Getting order types for merchant
        DataService.getData(urlObject.ordertypes)
        .then(function(data){

                //Variables to store order types details
                vm.orderTypes.delivery={};
                vm.orderTypes.pickup ={};

                //Variables to store Store Hours
                vm.orderTypes.deliveryHours =[];
                vm.orderTypes.pickupHours =[];

                // Identifying order type and storing respective details in objects
                angular.forEach(data.elements, function(value, key) {
 
                    if (value.label.indexOf("delivery") >= 0) {

                        /* Assigning the complete pick order type object which holds useful details like
                        minOrderAmount,maxOrderAmount,maxRadius,etc */
                        vm.orderTypes.delivery= value;

                        // If order type have business hours, assign bussiness hours read from merchants
                        if(value.hoursAvailable.indexOf("BUSINESS") >= 0){

                            vm.orderTypes.deliveryHours= vm.orderTypes.businessHours;

                        }
                        else
                        {
                            // Parsing store hours and storing it in array
                            angular.forEach(value.hours, function(value, key) {

                                // Valdiation to get only week related details
                                if ($scope.weeks.indexOf(key) > -1){

                                    var hoursObject={};
                                    hoursObject.name = key.toUpperCase();
                                    hoursObject.hours = value.elements;

                                    //Pushing store timing details in array for displaying on UI
                                    vm.orderTypes.deliveryHours.push(hoursObject);

                                }

                            });
                        }

                    }else{

                        /* Assigning the complete pick order type object which holds useful details like
                        minOrderAmount,maxOrderAmount,maxRadius,etc */
                        vm.orderTypes.pickup = value;

                        // If order type have business hours, assign bussiness hours read from merchants
                        if(value.hoursAvailable.indexOf("BUSINESS") >= 0){

                            vm.orderTypes.pickupHours= vm.orderTypes.businessHours;

                        }
                        else
                        {
                            // Parsing store hours and storing it in array
                            angular.forEach(value.hours, function(value, key) {

                                // Valdiation to get only week related details
                                if ($scope.weeks.indexOf(key) > -1){

                                    var hoursObject={};
                                    hoursObject.name = key.toUpperCase();
                                    hoursObject.hours = value.elements;
                                    
                                    //Pushing store timing details in array for displaying on UI
                                    vm.orderTypes.pickupHours.push(hoursObject);

                                }

                            });
                        }       
                    }

                }); // foreach end

        },function (error) {

                    console.log("Error reading order types:"+JSON.stringify(error));

        });

        // Getting data for offers
        DataService.getData(urlObject.discount)
        .then(function(data){

                //console.log("Data:"+JSON.stringify(CartService.getMyCart()));
                vm.offers = data.elements;

        },function (error) {

                    console.log("Error:"+JSON.stringify(error));

        });


    // Function converts time to 12 hour format 
    $scope.hoursConversion = function(hrs){

        //console.log("HoursConversion:"+JSON.stringify(hrs));
        //console.log("Hours length:"+hrs.toString().length);

        // Coverting storetime to string
        var hours = hrs.toString();

        /* As we are getting the store timings in below format, we have added addtional logic to 
           get timings in better format"
           EG:  100-1.00 AM
                30-12.30 AM,
                0-12.00 AM,
                1130-11.30 AM,
                1530-03.30 PM,
                2200-10.00 PM.

        */
        if(hours.length == 3){

            var hr = hours.substring(0, 1);
            var min = hours.substring(1, 3);
            return hr+":"+min+" AM";
        }
        else if (hours.length == 4) {
            
            var hr = hours.substring(0, 2);
            var min = hours.substring(2, 4);

            if(hr > 12)
                var hr= hr-12;
            return hr+":"+min+" PM";
        }
        else if(hours.length == 1){

            return "12:00 AM";

        }
        else if(hours.length == 2){

            return "12:30 AM";

        }
        else
            return "NA";

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
    }
})();
