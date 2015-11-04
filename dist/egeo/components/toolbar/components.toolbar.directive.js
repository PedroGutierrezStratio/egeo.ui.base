(function() {
    'use strict';

    angular
        .module('egeo.toolbar', [])
        .directive('egeoCToolbar', egeoCToolbar);

    egeoCToolbar.$inject = ['EgeoConfig', 'EgeoChildrenClass'];

    function egeoCToolbar(EgeoConfig, EgeoChildrenClass) {
        var directive = {
            atRight: '@',
            link: EgeoChildrenClass('egeo-c-toolbar__item'),
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {
                atRight: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/toolbar/components.toolbar.tpl.html'
        }

        return directive;
    }
})();
