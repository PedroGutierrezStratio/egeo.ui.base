(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCInput', egeoCInput);

    egeoCInput.$inject = ['EgeoConfig'];

    function egeoCInput(EgeoConfig) {
        var directive = {
            controller: 'EgeoInputController as vm',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
                disabled: '@',
                form: '@',
                helpText: '@',
                id: '@',
                info: '@',
                label: '@',
                model: '=',
                pattern: '=',
                placeholder: '@',
                qa: '@',
                required: '@',
                type: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/input/components.input.tpl.html'
        };

        return directive;

        function link(scope, element, attrs, ctrl) {
            if (scope.helpText) { 
                ctrl.hasHelp = true; 
            }
        }
    }
})();
