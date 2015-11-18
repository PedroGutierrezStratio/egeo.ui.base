(function() {
    'use strict';

    angular
        .module('egeo.buttons', [])
        .directive('egeoCButton', egeoCButton);

    egeoCButton.$inject = ['EgeoConfig'];

    function egeoCButton(EgeoConfig) {
        var directive = {
            controller: 'EgeoButtonController as vm',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
                atRight: '@',
                iconLeft: '@',
                iconRight: '@',
                label: '@',
                modifier: '@',
                popover: '@',
                rounded: '@',
                small: '@',
                tabindex: '@',
                type: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/button/components.button.tpl.html'
        }

        return directive;

        function link(scope, element, attrs, ctrl) {
            if (scope.popover) { 
                ctrl.hasPopover = true; 
                element.click(ctrl.togglePopover);
            }
        }
    }
})();
