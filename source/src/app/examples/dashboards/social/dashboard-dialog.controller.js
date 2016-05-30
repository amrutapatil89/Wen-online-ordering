(function() {
    'use strict';

    angular
        .module('app.examples.dashboards')
        .controller('ModifierDialogController', ModifierDialogController);

    /* @ngInject */
    function ModifierDialogController($scope, $http, $mdDialog) {
    	var vm = this;
    	
        $scope.hide = function() {
    		$mdDialog.hide();
	  	};
	  	$scope.cancel = function() {
	  	  $mdDialog.cancel();
	  	};
	  	$scope.answer = function(answer) {
	    	$mdDialog.hide(answer);
	  	};
    }
})();