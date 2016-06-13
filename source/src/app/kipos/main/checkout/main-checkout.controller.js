(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .controller('MainCheckoutController', MainCheckoutController);

    /* @ngInject */
    function MainCheckoutController($scope, $timeout, $mdToast, $rootScope, $state) {
      
      console.log("Checkout Controller");
    }
})();
