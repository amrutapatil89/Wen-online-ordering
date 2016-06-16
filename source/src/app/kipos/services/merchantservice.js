(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .factory('MerchantService', MerchantService);
    function MerchantService($http, $q, $timeout, $rootScope, DataService, $location, $window, LogService, API_CONFIG) {

        var vm = this;
        var merchantId;
        var merchantData;
        var errorMerchantNotFound = "Error: Merchant Data could not be fetched;";
        
        return {

                //get merchant Data  
                getMerchantId: function() {

                    var mId;

                    function fetchMerchantId (url){

                           return $timeout(function() {
                                merchantId = "13HRYK02HZM30";

                                $window.sessionStorage.merchantId = merchantId;
                                $rootScope.merchantId = merchantId;

                                $window.sessionStorage.endUrl = url;

                                return merchantId;
                        }, 5000);
                    }

                    if ($window.sessionStorage.merchantId) {

                        if ($window.sessionStorage.endUrl != $location.$$path) {
                            mId = $rootScope.merchantId = $window.sessionStorage.merchantId;
                            console.log("Refetching the merchant Id as location does not match.");
                            
                        } else{
                            console.log("Getting the merchant ID from session");
                            mId = fetchMerchantId($location.$$path);
                        }

                    } else{
                        console.log("Opening page for the first time.");
                        mId = fetchMerchantId($location.$$path);
                    };

                    return mId;
                       
                },

                 getMerchantData: function(id) {

                    var mData = DataService.getData(API_CONFIG.url + id);

                    return mData;
                }

        } // end of main return           

    }// end of DataService
})();
