(function() {
    'use strict';

    angular
        .module('egeo.toolbar', [])
        .directive('egeoCToolbar', egeoCToolbar);

    egeoCToolbar.$inject = ['EgeoConfig'];

    function egeoCToolbar(EgeoConfig) {
        function link(scope, elm, attrs, ctrl, transclude) {
            // Create a temp store if not exists
            if (!document.egeo) document.egeo = {};
            if (!document.egeo.toolbars) document.egeo.toolbars = [];
            
            // Save the element in a temp global item
            document.egeo.toolbars.push(elm);

            setTimeout(function(){ 
                var toolbar;

                // Retrieve the toolbar elements to put the subclass to
                // its childs
                for (var c = 0; c < document.egeo.toolbars.length; c++) {
                    toolbar = document.egeo.toolbars[c];
                    toolbar.children().addClass('egeo-c-toolbar__item');                
                }

                // Free memory if not needed
                document.egeo.toolbars = null;
                if (Object.keys(document.egeo).length === 0) document.egeo = null;
            }, 0);
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
