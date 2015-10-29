(function() {
    'use strict';

    angular
        .module('egeo.layout', [])
        .directive('egeoCToolbar', egeoCToolbar);

    egeoCToolbar.$inject = ['EgeoConfig'];

    function egeoCToolbar(EgeoConfig) {
        var directive = {
            link: function (scope, elm, attrs, ctrl, transclude) {
                console.log('link');
                transclude(scope,function(clone) {
                    console.log('transclude');
                    clone.filter('button').addClass('egeo-c-toolbar__item');
                    elm.append(clone);
                });
            },
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
