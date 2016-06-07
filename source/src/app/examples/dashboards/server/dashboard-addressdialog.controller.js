(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('AddressDialogController', AddressDialogController);

    /* @ngInject */
    function AddressDialogController($scope, $mdDialog, $http, $rootScope) {

    //     var vm = this;
    //     vm.itemModifiers = {};
        console.log("Controller Loaded");
    //     $scope.itemid = itemId;
    //     console.log($scope.itemid);


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


    //     // Get call for categories 
    //     $http.get(getModifierUrl)
    //     .then(function(response) {
    //         console.log("Got the response");
    //         vm.itemModifiers = response.data;
    //         $scope.itemModifiersA = response.data;
    //     });
    }
})();
