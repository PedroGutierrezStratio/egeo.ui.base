(function() {
    'use script';

    angular
        .module('egeo.config', [])
        .provider('EgeoConfigProvider', EgeoConfigProvider);

    function EgeoConfigProvider() {
        var defaultEgeoPath = 'public/js/egeo';

        this.setEgeoPath = function(path) {
            this.defaultEgeoPath = path;
        }

        getEgeoPath = function () {
            return defaultEgeoPath;
        }

        this.$get = function () {
            return {
                getEgeoPath: getEgeoPath
            };
        }
    }
})();
