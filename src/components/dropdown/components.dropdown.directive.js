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
                isOpen: '@',
                label: '@',
                rounded: '@',
                small: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/dropdown/components.dropdown.tpl.html'
        }

        return directive;

        function link(scope, elem) {
            // Initialize the status if the user didn't set it via parameter
            if (!scope.isOpen) scope.isOpen = false;

            elem.find('egeo-c-button').bind('click', onClickDropdownBtn);

            setTimeout(function() {
                // Apply the item class to all elements inside the menu
                elem.find('.egeo-c-dropdown__menu').children().addClass('egeo-c-dropdown__item');
            }, 0);
        }

        function onClickDropdownBtn() {
            scope.isOpen = !scope.isOpen;
        }
    }
})();
