(function() {
    'use strict';

    angular
        .module('app.kipos.main')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.main-menu', {
            url: '/main/menu',
            templateUrl: 'app/kipos/main/menu/main-menu.tmpl.html',
            controller: 'MainMenuController',
            controllerAs: 'vm',
             data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('triangular.main-checkout', {
            url: '/main/checkout',
            templateUrl: 'app/kipos/main/checkout/main-checkout.tmpl.html',
            controller: 'MainCheckoutController',
            controllerAs: 'vm'
            //  data: {
            //     layout: {
            //         contentClass: 'layout-column'
            //     }
            // }
        });

    }
})();
