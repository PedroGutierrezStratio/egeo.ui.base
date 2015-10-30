(function() {
    'use strict';

    angular
        .module('egeo.toolbar', [])
        .directive('egeoCToolbar', egeoCToolbar);

    egeoCToolbar.$inject = ['EgeoConfig'];

    function egeoCToolbar(EgeoConfig) {
        function link(scope, elm, attrs, ctrl, transclude) {
            transclude(scope, function() {
                elm.children().addClass('egeo-c-toolbar__item');                
            });
        }

        var directive = {
            link: link,
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/toolbar/components.toolbar.tpl.html'
        }

        return directive;
    }
})();
