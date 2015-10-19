(function() {
    'use strict';

    angular
        .module('egeo.buttons', [])
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
            templateUrl: 'public/js/egeo/components/button/components.button.tpl.html'
        }

        return directive;
    }
})();
