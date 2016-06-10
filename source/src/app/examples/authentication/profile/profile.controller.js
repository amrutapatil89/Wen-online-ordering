(function() {
    'use strict';

    angular
        .module('app.examples.authentication')
        .controller('ProfileController', ProfileController);

    /* @ngInject */
    function ProfileController($http, $scope, $rootScope, $mdDialog) {

        var vm = this;
        vm.createDialog = createDialog;

        //for showing dialog box for adding new address by Chetan Purohit
        function createDialog($event) {

            $mdDialog.show({
                controller: 'AddressDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/dashboards/server/address-dialog.tmpl.html',
                targetEvent: $event,
                focusOnOpen: false
            });
        }

        // Get call for users
        $http.get("http://52.23.209.206:3000/api/v1/13HRYK02HZM30/customers/+1-1110000000")
        .then(function(response) {

            $rootScope.userDetails = response;
            $scope.firstName = response.data.firstName;
            $scope.lastName = response.data.lastName;
            $scope.userName = $scope.firstName + " " + $scope.lastName;
            $scope.email = response.data.vzMongoCust.email;
            $scope.userAddress = response.data.vzMongoAddr;
        });

        // Get call for orders
        $http.get("http://52.23.209.206:3000/api/v1/4y_TUf5Wl/customerOrders/+1-1110000000")
        .then(function(response) {

            $scope.orders = response.data.elements;
        });

        //this function is used for setting address as default
        $scope.setAddressAsDefault = function(add) {

            $rootScope.userDetails.data.vzMongoAddr.forEach(function(addr, addrIndex) {

                if(addr.isDefault) {

                    $rootScope.userDetails.data.vzMongoAddr[addrIndex].isDefault = false;
                }

                if(addr._id == add._id) {

                    $rootScope.userDetails.data.vzMongoAddr[addrIndex].isDefault = true;
                }
            });
        }
    }
})();