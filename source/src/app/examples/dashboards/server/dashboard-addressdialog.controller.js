(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('AddressDialogController', AddressDialogController);

    /* @ngInject */
    function AddressDialogController($scope, $mdDialog, $http, $rootScope, $q) {

        var vm = this;
        vm.states             = loadAll();
        vm.selectedItem       = null;
        vm.searchText         = null;
        vm.querySearch        = querySearch;
        vm.simulateQuery      = false;
        vm.isDisabled         = false;
        vm.selectedItemChange = selectedItemChange;
        vm.searchTextChange   = searchTextChange;

        function querySearch (query) {
            var results = query ? vm.states.filter( createFilterFor(query) ) : vm.states, deferred;
            if(self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            
            $scope.state = text;

        }

        function selectedItemChange(item) {

            $scope.state = item.display;
        }

        /**
        * Build `states` list of key/value pairs
        */
        function loadAll() {
        /* jshint multistr: true */
            var allStates = 'AK, AL, AR, AZ, CA, CO, CT, DC, DE, FL, GA, HI, IA, ID, IL, IN, KS, KY, LA, MA, MD, ME, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, NM, NV, NY, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, WI, WV, WY';

            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
        * Create filter function for a query string
        */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        console.log("Controller Loaded");

        //below function is used for hiding/closing dialog box
        $scope.closeDialog = function() {

            $mdDialog.hide();
        }//end of closeDialog function

        //below function is used for adding new address for current user
        $scope.addAddress = function() {

            //for creating object of new address details
            var object = {
                address1: $scope.address1,
                address2: $scope.address2,
                address3: $scope.address3,
                city: $scope.city,
                state: $scope.state,
                zip: $scope.zip
            };

            var currentObjectCount = $rootScope.userDetails.data.vzMongoAddr.length;

            $rootScope.userDetails.data.vzMongoAddr[currentObjectCount] = {

                address: object
            }

            $scope.closeDialog();
        }//end of addAddress function
    }
})();
