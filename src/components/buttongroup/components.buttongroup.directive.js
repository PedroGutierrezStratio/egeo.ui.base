(function() {
    'use strict';

    angular
        .module('buttons')
        .directive('EgeoCButtongroup', EgeoCButtongroup);

    EgeoCButtongroup.$inject = ['EgeoConfig'];

    function EgeoCButtongroup(EgeoConfig) {
        var directive = {
            link: link,
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: EgeoConfig.getEgeoPath() + '/components/buttongroup/components.buttongroup.tpl.html';
        }

        function link(scope, element, attrs) {
            scope.$watch(calcWidth(element), function() {console.log("width changes");});
        }

        function calcWidth(element) {
            console.log(element.width());
            return element.width();
        }
    }
})();
