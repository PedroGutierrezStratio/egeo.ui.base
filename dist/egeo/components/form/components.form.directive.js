(function() {
    'use strict';

    angular
        .module('egeo.forms', [])
        .directive('egeoCForm', egeoCForm);

    egeoCForm.$inject = ['EgeoConfig'];

    function egeoCForm(EgeoConfig) {
        var directive = {
            replace: true,
            restrict: 'E',
            scope: {
                name: '@',
                method: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/form/components.form.tpl.html',
            transclude: true
        };

        return directive;
    }
})();
