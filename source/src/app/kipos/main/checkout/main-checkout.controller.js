(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('MainCheckoutController', MainCheckoutController);

    /* @ngInject */
    function MainCheckoutController($scope, $timeout, $mdToast, $mdDialog, $state, $http, $rootScope) {
      
      var vm = this;

        $scope.change = false;
        vm.createDialog = createDialog;
        vm.createLoginDialog = createLoginDialog();

        //below is the url prefix required for all the APIs
        var urlPrefix = "http://52.23.209.206:3000";

        //below object stores url for API calls
        var urlObject = {

            customer: urlPrefix + "/api/v1/13HRYK02HZM30/customers/+1-1110000000"
        };

        // Get call for users
        $http.get(urlObject.customer)
        .then(function(response) {

            $rootScope.userDetails = response;
            $scope.userName = response.data.firstName + " " + response.data.lastName;
            $scope.userAddress = response.data.vzMongoAddr;
            $scope.email = response.data.vzMongoCust.email;
            $scope.phone = response.data.vzMongoCust.phone;

            var foundDefaultAddress = false;
            var addressIndex = 0;

            //for getting default address
            response.data.vzMongoAddr.forEach(function(addr){

                addressIndex++;

                if(addr.isDefault) {

                    $scope.selectedAddress = addr;
                    foundDefaultAddress = true;
                }

                if(response.data.vzMongoAddr.length == addressIndex) {

                    if(foundDefaultAddress == false) {

                        $scope.selectedAddress = response.data.vzMongoAddr[0];            
                    }
                }
            });
        });

        //for showing dialog box for adding new address by Chetan Purohit
        function createDialog($event) {
            $mdDialog.show({
                controller: 'AddressDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/kipos/main/checkout/address-dialog.tmpl.html',
                targetEvent: $event,
                focusOnOpen: false
            });
        }

        function createLoginDialog($event) {
            $mdDialog.show({
                controller: 'LoginDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/kipos/main/login/login-dialog.tmpl.html',
                targetEvent: $event,
                focusOnOpen: false
            });
        }


        //for setting the selected address and showing it on UI by Chetan
        $scope.setAddress = function(add) {

            $scope.selectedAddress = add;
            $scope.switchWindow();    
        } //end of setAddress function

        //function for changing value of change variable by Chetan
        $scope.switchWindow = function() {

            if($scope.change) {

                $scope.change = false;
            } else {

                $scope.change = true;
            }
        }//end of switchWindow function
    }
})();
