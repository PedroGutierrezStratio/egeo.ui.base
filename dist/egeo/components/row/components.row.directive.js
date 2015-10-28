(function() {
    'use strict';

    angular
        .module('egeo.layout', [])
        .directive('egeoCRow', egeoCRow);

    egeoCRow.$inject = ['EgeoConfig'];

    function egeoCRow(EgeoConfig) {
        var directive = {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/row/components.row.tpl.html'
        }

        return directive;
    }
})();
