(function() {
    'use strict';

    angular
        .module('egeo.buttons', ['EgeoConfigProvider'])
        .directive('egeoCButton', egeoCButton);

    function egeoCButton() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                icon: '@',
                label: '@',
                modifier: '@',
                rounded: '@',
                small: '@',
                tabindex: '@',
                type: '@'
            },
            templateUrl: EgeoConfigProvider.getEgeoPath + '/components/button/components.button.tpl.html'
        }

        return directive;
    }
})();
