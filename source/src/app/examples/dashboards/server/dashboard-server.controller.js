(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DashboardServerController', DashboardServerController);

    /* @ngInject */
    function DashboardServerController($scope, $timeout, $mdToast, $http, $mdDialog, $rootScope) {
        var vm = this;

        $scope.change = false;
        vm.createDialog = createDialog;

        // Get call for users
        $http.get("http://52.23.209.206:3000/api/v1/13HRYK02HZM30/customers/+1-1110000000")
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
                templateUrl: 'app/examples/dashboards/server/address-dialog.tmpl.html',
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

        vm.disks = [{
            icon: 'zmdi zmdi-storage',
            name: 'Ubuntu 10.04 LTS Disk Image',
            enabled: true
        },{
            icon: 'zmdi zmdi-input-composite',
            name: 'Ubuntu 11.10 SSD Image',
            enabled: false
        },{
            icon: 'zmdi zmdi-storage',
            name: '256MB Swap Image',
            enabled: true
        }];

        vm.jobs = [{
            job: 'Host initiated restart',
            time: 'Took: 10 seconds',
            complete: true
        },{
            job: 'Snapshot ',
            time: 'Took: 6minutes 26 seconds',
            complete: false
        }];

        vm.serverChart = {
            labels: ['Swap space', 'Kernel', 'OS', 'Free space'],
            data: [15, 5, 35, 45]
        };

        // $timeout(function() {
        //     $mdToast.show(
        //         $mdToast.simple()
        //         .content('Server CPU at 100%!')
        //         .position('bottom right')
        //         .hideDelay(3000)
        //     );
        // }, 5000);
    }
})();
