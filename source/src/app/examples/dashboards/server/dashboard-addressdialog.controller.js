(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('AddressDialogController', AddressDialogController);

    /* @ngInject */
    function AddressDialogController($scope, $mdDialog, $http) {

    //     var vm = this;
    //     vm.itemModifiers = {};
        console.log("Controller Loaded");
    //     $scope.itemid = itemId;
    //     console.log($scope.itemid);

        $scope.closeDialog = function() {

            $mdDialog.hide();
        }
    //     // Get call for categories 
    //     $http.get(getModifierUrl)
    //     .then(function(response) {
    //         console.log("Got the response");
    //         vm.itemModifiers = response.data;
    //         $scope.itemModifiersA = response.data;
    //     });
    }
})();
