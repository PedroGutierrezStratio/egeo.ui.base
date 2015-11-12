(function() {
    'use strict';

    angular
        .module('egeo.popover', [])
        .directive('egeoCPopover', egeoCPopover);

    egeoCPopover.$inject = ['EgeoConfig'];

    function egeoCPopover(EgeoConfig) {
        var directive = {
            restrict: 'A',
            replace: true,
            scope: {},
            templateUrl: EgeoConfig.getEgeoPath() + '/components/popover/components.popover.tpl.html';
            transclude: true
        }

        return directive;
    }
})();
