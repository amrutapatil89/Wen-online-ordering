(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('ModifierDialogController', ModifierDialogController);

    /* @ngInject */
    function ModifierDialogController($scope, $mdDialog, $http, itemId) {

        var vm = this;
        vm.itemModifiers = {};
        console.log("Controller Loaded");
        $scope.itemid = itemId;
        console.log($scope.itemid);


        var getModifierUrl =   "http://52.23.209.206:3000/api/v1/13HRYK02HZM30/items/" + $scope.itemid.item;

        // Get call for categories 
        $http.get(getModifierUrl)
        .then(function(response) {
            console.log("Got the response");
            vm.itemModifiers = response.data;
            $scope.itemModifiersA = response.data;
        });
    }
})();
