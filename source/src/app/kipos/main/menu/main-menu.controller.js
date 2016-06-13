(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('MainMenuController', MainMenuController);

    /* @ngInject */
    function MainMenuController($scope, $timeout, $mdToast, $rootScope, $state, $location, DataService) {
       console.log("Menu Controller");

    }
})();
