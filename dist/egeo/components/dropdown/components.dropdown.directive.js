(function(){
    'use strict';

    angular
        .module('egeo.dropdown', [])
        .directive('EgeoCDropdown', EgeoCDropdown);

    EgeoCDropdown.$inject = ['EgeoConfig', 'EgeoChildrenClass'];

    function EgeoCDropdown() {
        var directive = (
            link: EgeoChildrenClass('egeo-c-dropdown__item'),
            scope: {},
            replace: true,
            restrict: 'E',
            templateUrl: EgeoConfig.getEgeoPath() + '/components/dropdown/components.dropdown.tpl.html';
        );

        return directive;
    }
})();
