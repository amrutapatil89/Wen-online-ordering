(function() {
    'use strict';

    angular
        .module('app')
        .run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $state, $location, API_CONFIG, MerchantService) {

        // default redirect if access is denied
        function redirectError() {
            $state.go('500');
        }

        // Init call to get merchant data based on url
        function init(){
            MerchantService.getMerchantId() ;
        }

        init();

        // watches

        // redirect all errors to permissions to 500
        var errorHandle = $rootScope.$on('$stateChangeError', redirectError);

        // remove watch on destroy
        $rootScope.$on('$destroy', function() {
            errorHandle();
        });
    }
})();
