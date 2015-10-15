(function() {
    'use strict';

    angular
        .module('myApp', [])
        .directive('egeoCButton', egeoCButton);

    function egeoCButton() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                label: '@',
                modifier: '@',
                tabindex: '@',
                rounded: '@',
                small: '@',
                type: '@'
            },
            templateUrl: 'public/js/egeo/components/button/components.button.tpl.html'
        }

        console.log("egeoCButton");

        return directive;
    }
})();
