(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('MainMenuController', MainMenuController);

    /* @ngInject */
    function MainMenuController($scope, $timeout, $mdToast, $rootScope, $state) {
       console.log("Menu Controller");
    }
})();
