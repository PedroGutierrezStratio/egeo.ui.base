(function() {
    'use strict';

    angular
        .module('egeo.buttons', [])
        .directive('egeoCButton',egeoCButton);

    function egeoCButton() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                label: '=',
                modifier: '=',
                tabindex: '=',
                type: '='
            },
            templateUrl: 'components.button.tpl.html'
        }
    }
})();
