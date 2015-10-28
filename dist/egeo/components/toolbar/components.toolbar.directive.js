(function() {
    'use strict';

    angular
        .module('egeo.layout', [])
        .directive('egeoCToolbar', egeoCToolbar);

    egeoCToolbar.$inject = ['EgeoConfig'];

    function egeoCToolbar(EgeoConfig) {
        var directive = {
            link: function (scope, elm, attrs,ctrl,transclude) {
                transclude(scope,function(clone) {
                    clone.filter('div').addClass('egeo-c-toolbar__item');
                    elm.append(clone);
                });
            }
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
