(function() {
    'use strict';

    angular
        .module('egeo.app-header', [])
        .directive('egeoCAppHeader', egeoCAppHeader);

    egeoCAppHeader.$inject = ['EgeoConfig'];

    function egeoCAppHeader(EgeoConfig) {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                logoSref: '@',
                logoUrl: '@',
                logoAlt: '@',
                username: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/app-header/components.app-header.tpl.html'
        }

        return directive;
    }
})();
