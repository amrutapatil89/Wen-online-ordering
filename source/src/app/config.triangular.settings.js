(function() {
    'use strict';

    angular
        .module('app')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig(triSettingsProvider, triRouteProvider) {
        var now = new Date();
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        triSettingsProvider.setName('CLAVO');
        triSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' kiposlabs.com');
        triSettingsProvider.setLogo('assets/images/logo.png');
        // set current version of app (shown in footer)
        triSettingsProvider.setVersion('2.7.2');
        // set the document title that appears on the browser tab
        triRouteProvider.setTitle('Clavo');
        triRouteProvider.setSeparator('|');
    }
})();
