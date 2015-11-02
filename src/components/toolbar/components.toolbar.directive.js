(function() {
    'use strict';

    angular
        .module('egeo.toolbar', [])
        .directive('egeoCToolbar', egeoCToolbar);

    egeoCToolbar.$inject = ['EgeoConfig', 'EgeoChildrenClass'];

    function egeoCToolbar(EgeoConfig, EgeoChildrenClass) {
        var directive = {
            link: EgeoChildrenClass('egeo-c-toolbar__item'),
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: EgeoConfig.getEgeoPath() + '/components/toolbar/components.toolbar.tpl.html'
        }

        return directive;
    }
})();
