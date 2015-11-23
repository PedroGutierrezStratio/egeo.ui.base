(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCLabel', egeoCLabel);

    egeoCLabel.$inject = ['EgeoConfig'];

    function egeoCLabel(EgeoConfig) {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                id: '@',
                label: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/label/components.label.tpl.html'
        };

        return directive;
    }
})();
