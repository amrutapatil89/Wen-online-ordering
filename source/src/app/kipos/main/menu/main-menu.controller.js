(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('MainMenuController', MainMenuController);

    /* @ngInject */
    function MainMenuController($scope, $q, $timeout, $mdToast, $mdDialog, $rootScope, $state, $location, $http, API_CONFIG, DataService, MerchantService) {
       
        var vm = this;


        // Temporary object/ arrays/ functions - REMOVE TO STREAM LINE
        $scope.weeks                = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

        // Data Objects 
        vm.merchant;
        vm.locationInfo;
        vm.appId;
        vm.locationBranding;
        vm.orderTypes               = {}; // Initialized as business hours are stored in this object.
        vm.orderTypes.delivery      = {}; //           
        vm.orderTypes.pickup        = {}; // 


        // Data Arrays 
        vm.categories               = [];
        vm.items                    = [];
        vm.cartItems                = [];
        vm.paymentTypes             = [];
        vm.offers                   = [];
        vm.orderTypes.businessHours = [];
        vm.orderTypes.deliveryHours = [];
        vm.orderTypes.pickupHours   = [];


        // Data Functions
        vm.fetchLocationAccount     = fetchLocationAccount;
        vm.fetchLocationBranding    = fetchLocationBranding;
        vm.fetchCategories          = fetchCategories;
        vm.fetchItems               = fetchItems;
        vm.getMerchantData          = getMerchantData;
        vm.fetchOffers              = fetchOffers;
        vm.fetchOrderTypes          = fetchOrderTypes;
        // vm.createDialog             = createDialog;


        // Utility Objects
        vm.selectedCategory         = "";


        // Utility Arrays


        // Utility Functions
        vm.locationBusinessHours    = locationBusinessHours;
        vm.selectCategory           = selectCategory;
        vm.filterItemsByCategory    = filterItemsByCategory;
        vm.setDeliveryBusinessHours = setDeliveryBusinessHours;
        vm.setPickupBusinessHours   = setPickupBusinessHours;
        vm.hoursConversion          = hoursConversion;
        

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

                // Assign merchant Business hours
                vm.locationBusinessHours(vm.merchant);

                // Assigning the payment types supported by merchant
                vm.paymentTypes = vm.merchant.paymentType;
                
                // FETCH FUNCTIONS

                // Fetch Location Branding 
                vm.fetchLocationAccount(API_CONFIG.url + $rootScope.merchantId + "/account"); 
                // Fetch Location Branding 
                // vm.fetchLocationBranding(API_CONFIG.url + $rootScope.merchantId + "/account");
                // Fetch Categories 
                vm.fetchCategories(API_CONFIG.url + $rootScope.merchantId + "/categories");
                // Fetch Items
                vm.fetchItems(API_CONFIG.url + $rootScope.merchantId + "/items");
                // Fetch Order types
                vm.fetchOrderTypes(API_CONFIG.url + $rootScope.merchantId + "/order_types");
                // Fetch Offers
                vm.fetchOffers(API_CONFIG.url + $rootScope.merchantId + "/valid_discounts");



            });
        }


        function fetchLocationAccount(url){

            // Fetching account details of the location 
            // From account info fetch app details of the merchant
            // i.e. Branding information, theme etc.
            DataService.getData(url)
            .then(function(locationinfo){
                vm.locationInfo = locationinfo;
                vm.appId        = vm.locationInfo.appId;
                fetchLocationBranding(vm.appId);
            })
            .catch(function(){
                return $rootScope.categoryErrorMessage;
            });

        }

        function fetchLocationBranding(appid) {

             // Directly assigning value to categories object 
            // as there are no dependency on other calls;
            DataService.getData(API_CONFIG.url + "apps/" + appid)
            .then(function(locationbranding){
                vm.locationBranding = locationbranding;
            })
            .catch(function(){
                return $rootScope.categoryErrorMessage;
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
            .catch(function(error){
                console.log("Error : " +error);
                return $rootScope.itemsErrorMessage;
            });

        }// end of fetchItems


        function fetchOrderTypes(url){
            // Getting order types for merchant
            DataService.getData(url)
            .then(function(data){
                // Identifying order type and storing respective details in objects
                angular.forEach(data.elements, function(value, key) {
                    if (value.label.indexOf("delivery") >= 0) {

                        /* Assigning the complete pick order type object which holds useful details like
                        minOrderAmount,maxOrderAmount,maxRadius,etc */
                        vm.orderTypes.delivery = value;
                        // set Business hours for Delivery 
                        setDeliveryBusinessHours(vm.orderTypes.delivery);
                    }
                    else
                    {
                        /* Assigning the complete pick order type object which holds useful details like
                        minOrderAmount,maxOrderAmount,maxRadius,etc */
                        vm.orderTypes.pickup = value;
                        // set Business hours for Delivery 
                        setPickupBusinessHours(vm.orderTypes.pickup);   
                    }
                }); // for-each end
            })
            .catch(function (error) {
                console.log("Error reading order types:"+JSON.stringify(error));
                return $rootScope.itemsErrorMessage;
            });
        }

        // function to fetch offers
        function fetchOffers(url){

            // Getting data for offers
            DataService.getData(url)
            .then(function(offers){
                vm.offers = offers.elements;
            })
            .catch (function (error) {
                console.log("Error : " +error);
                return $rootScope.itemsErrorMessage;
            });
        }








        // Utility Functions

        function setDeliveryBusinessHours(value){
             // If order type have business hours, assign business hours read from merchants
            if(value.hoursAvailable.indexOf("BUSINESS") >= 0){
                vm.orderTypes.deliveryHours = vm.orderTypes.businessHours;
            }
            else
            {
                // Parsing store hours and storing it in array
                angular.forEach(value.hours, function(value, key) {

                    // Validation to get only week related details
                    if ($scope.weeks.indexOf(key) > -1){
                        var hoursObject     = {};
                        hoursObject.name    = key.toUpperCase();
                        hoursObject.hours   = value.elements;

                        //Pushing store timing details in array for displaying on UI
                        vm.orderTypes.deliveryHours.push(hoursObject);

                    }
                });
            }
        }

        function setPickupBusinessHours(value){
             // If order type have business hours, assign business hours read from merchants
            if(value.hoursAvailable.indexOf("BUSINESS") >= 0){
                vm.orderTypes.pickupHours   = vm.orderTypes.businessHours;
            }
            else
            {
                // Parsing store hours and storing it in array
                angular.forEach(value.hours, function(value, key) {

                    // Validation to get only week related details
                    if ($scope.weeks.indexOf(key) > -1){

                        var hoursObject     = {};
                        hoursObject.name    = key.toUpperCase();
                        hoursObject.hours   = value.elements;
                        
                        //Pushing store timing details in array for displaying on UI
                        vm.orderTypes.pickupHours.push(hoursObject);
                    }
                });
            } 
        }


         // Function converts time to 12 hour format 
        function hoursConversion (hrs){

            // Converting location time to string
            var hours = hrs.toString();

            /* As we are getting the store timings in below format, we have added additional logic to 
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

        function locationBusinessHours(merchantInfo){
             
                // Identifying order type and storing respective details in objects
                angular.forEach(merchantInfo.jsonData.opening_hours.elements, function(value, key) {

                        // Parsing store hours and storing it in array
                        angular.forEach(value, function(value, key) {

                            // Validation to get only week related details
                            if ($scope.weeks.indexOf(key) > -1){

                                var hoursObject={};
                                hoursObject.name = key.toUpperCase();
                                hoursObject.hours = value.elements;

                                //Pushing store timing details in array for displaying on UI
                                vm.orderTypes.businessHours.push(hoursObject);

                            }

                        });

                }); // End of for each
        }

        // Selecting a category as menu items are filtered by category
         function selectCategory(categoryId) {
            vm.selectedCategory = categoryId;
        }// End of selectCategory

         // filter all fields using common text box. 
        function filterItemsByCategory(row) {

            var categoryCount = row.categories.elements.length;
            var categoryIndex = 0;

            //In case All Categories is selcted return all of the categories
            if(vm.selectedCategory == "") {
                return row;
            }
            else if (row.categories.elements.length != 0) {

                // checking selected category with multiple categories 
                // associated with item
                // In case it is available return the row otherwise do nothing
                for (var i = 0; i < row.categories.elements.length; i++) {
                    var category = {};
                    category.id = row.categories.elements[i].id;
                    if(category.id == vm.selectedCategory){
                        return (row);  
                        break;                    
                    }
                }  
            }  
        } //End of filterItemsByCategory function


    }
})();
