(function() {
    'use strict';

    angular
        .module('app.examples.forms')
        .controller('FormWizardController', FormWizardController);

    /* @ngInject */
    function FormWizardController($scope, $mdDialog) {
        var vm = this;

        console.log("Controller is correct");

        $scope.click = function($event, dialog){
        	console.log("Clicked");

		  $mdDialog.show({
		      controller: DialogController,
		      templateUrl: 'app/examples/forms/dialogs.tmpl.html',
		      parent: angular.element(document.body),
		      targetEvent: $event,
		      clickOutsideToClose:true
		    });
        }

        $scope.click();


        vm.createDialog = createDialog;
        vm.newDialog = {
            title: 'Are you sure?',
            content: 'This will wipe your whole computer!',
            ok: 'Agree',
            cancel: 'Disagree'
        };

        function createDialog($event, dialog) {
        	console.log("Got it");
            $mdDialog.show(
                $mdDialog.confirm()
                .title("Hi")
                .textContent("dialog.content")
                .ok("OK")
                .cancel("cancel")
                .targetEvent($event)
            );
        }
    }
})();

function DialogController($scope, $mdDialog) {
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