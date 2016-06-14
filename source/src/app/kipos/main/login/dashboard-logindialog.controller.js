(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('LoginDialogController', LoginDialogController);

    /* @ngInject */
    function LoginDialogController($scope, $mdDialog, $http, $rootScope) {

        var vm = this;
        console.log("I am initiated");

        $scope.closeDialog = function() {

        	$mdDialog.hide();
        } //end of closeDialog function
    }

})();