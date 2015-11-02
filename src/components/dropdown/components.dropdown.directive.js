(function(){
    'use strict';

    angular
        .module('egeo.dropdown', [])
        .directive('egeoCDropdown', egeoCDropdown);

    egeoCDropdown.$inject = ['EgeoConfig'];

    function egeoCDropdown(EgeoConfig) {
        var directive = {
            link: link,
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {
                icon: '@',
                label: '@',
                rounded: '@',
                small: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/dropdown/components.dropdown.tpl.html'
        }

        return directive;

        function link(scope, elem) {
            setTimeout(function() {
                elem.find('.egeo-c-dropdown__menu').children().addClass('egeo-c-dropdown__item');
            }, 0);
        }
    }
})();
