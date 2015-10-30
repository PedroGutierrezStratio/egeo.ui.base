(function() {
    'use strict';

    angular
        .module('egeo.row', [])
        .directive('egeoCRow', egeoCRow);

    egeoCRow.$inject = ['EgeoConfig'];

    function egeoCRow(EgeoConfig) {
        var directive = {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                contentAtRight: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/row/components.row.tpl.html'
        }

        return directive;
    }
})();
