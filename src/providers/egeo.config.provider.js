(function() {
    'use strict';

    angular
        .module('egeo.config', [])
        .provider('EgeoConfig', EgeoConfig);

    function EgeoConfig() {
        var defaultEgeoPath = 'public/js/egeo';

        this.setEgeoPath = function(path) {
            defaultEgeoPath = path;
        }

        var getEgeoPath = function () {
            return defaultEgeoPath;
        }

        this.$get = function () {
            return {
                getEgeoPath: getEgeoPath
            };
        }
    }
})();
