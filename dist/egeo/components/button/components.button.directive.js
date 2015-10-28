(function() {
    'use strict';

    angular
        .module('egeo.buttons', [])
        .directive('egeoCButton', egeoCButton);

    egeoCButton.$inject = ['EgeoConfig'];

    function egeoCButton(EgeoConfig) {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                atRight: '@',
                iconLeft: '@',
                iconRight: '@',
                label: '@',
                modifier: '@',
                rounded: '@',
                small: '@',
                tabindex: '@',
                type: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/button/components.button.tpl.html'
        }

        return directive;
    }
})();
