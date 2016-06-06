(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('DashboardServerController', DashboardServerController);

    /* @ngInject */
    function DashboardServerController($scope, $timeout, $mdToast, $http, $mdDialog) {
        var vm = this;

        // Get call for users
        $http.get("http://52.23.209.206:3000/api/v1/13HRYK02HZM30/customers/+1-1110000000")
        .then(function(response) {
            $scope.userName = response.data.firstName + " " + response.data.lastName;
            $scope.userAddress = response.data.vzMongoAddr;

            // console.log("response: "+JSON.stringify(response));

            // console.log("USER name: "+JSON.stringify($scope.userName));
            // console.log("USERS: "+JSON.stringify($scope.userAddress));
        });

        function createDialog($event) {
            $mdDialog.show({
                controller: 'AddressDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/examples/dashboards/server/address-dialog.tmpl.html',
                targetEvent: $event,
                focusOnOpen: false
            });
        }

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
