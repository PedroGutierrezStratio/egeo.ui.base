(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCInput', egeoCInput);

    egeoCInput.$inject = ['EgeoConfig'];

    function egeoCInput(EgeoConfig) {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                id: '@',
                label: '@',
                placeholder: '@',
                type: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/input/components.input.tpl.html'
        };

        return directive;
    }
})();
