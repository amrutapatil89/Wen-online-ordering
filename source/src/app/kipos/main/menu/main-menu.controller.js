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

        // Arrays 
        vm.categories               = [];
        vm.items                    = [];
        vm.cartItems                = [];

        // Functions
        vm.fetchCategories          = fetchCategories;
        vm.fetchItems               = fetchItems;
        vm.getMerchantData          = getMerchantData;
        // vm.createDialog             = createDialog;
        

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
    }
})();
