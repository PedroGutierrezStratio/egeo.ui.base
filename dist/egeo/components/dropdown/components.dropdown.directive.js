(function(){
    'use strict';

    angular
        .module('egeo.dropdown', [])
        .directive('egeoCDropdown', egeoCDropdown);

    egeoCDropdown.$inject = ['EgeoConfig', 'EgeoChildrenClass'];

    function egeoCDropdown(EgeoConfig, EgeoChildrenClass) {
        var directive = {
            link: EgeoChildrenClass('egeo-c-dropdown__item'),
            replace: true,
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: EgeoConfig.getEgeoPath() + '/components/dropdown/components.dropdown.tpl.html'
        }

        return directive;
    }
})();
