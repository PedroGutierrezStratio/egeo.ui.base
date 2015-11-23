(function() {
    'use strict';

    angular
        .module('egeo.forms')
        .directive('egeoCFormgroup', egeoCFormgroup);

    egeoCFormgroup.$inject = ['EgeoConfig'];

    function egeoCFormgroup(EgeoConfig) {
        var directive = {
            restrict: 'E',
            replace: 'true',
            scope: {},
            templateUrl: EgeoConfig.getEgeoPath() + '/components/formgroup/components.formgroup.tpl.html',
            transclude: true
        };

        return directive;
    }
})();
