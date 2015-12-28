(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCCheckbox', egeoCCheckbox);

    egeoCCheckbox.$inject = ['EgeoConfig'];

    function egeoCCheckbox(EgeoConfig) {
        var directive = {
            controller: 'EgeoCheckboxController as vm',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
                disabled: '@',
                form: '@',
                helpText: '@',
                id: '@',
                label: '@',
                model: '=',
                pattern: '=',
                qa: '@',
                required: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/input/components.checkbox.tpl.html'
        };

        return directive;

        function link(scope, element, attrs, ctrl) {
            if (scope.helpText) { 
                ctrl.hasHelp = true; 
            }
        }
    }
})();
