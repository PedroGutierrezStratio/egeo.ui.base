(function() {
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
            scope: {},
            templateUrl: EgeoConfig.getEgeoPath() + '/components/dropdown/components.dropdown.tpl.html'
        }

        return directive;

        function link(scope, elem) {
            // Initialize the status if the user didn't set it via parameter
            if (!scope.isOpen) scope.isOpen = false;

            setTimeout(function() {
                // Apply the item class to all elements inside the menu
                elem.find('.egeo-c-dropdown__menu').children().addClass('egeo-c-dropdown__item');
            }, 0);
        }
    }
})();
