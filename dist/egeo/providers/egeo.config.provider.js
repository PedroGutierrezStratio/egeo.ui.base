(function() {
    'use script';

    angular
        .module('egeo.config', [])
        .provider('EgeoConfig', EgeoConfig);

    function EgeoConfig() {
        var defaultEgeoPath = 'public/js/egeo';

        this.setEgeoPath = function(path) {
            console.log(path);
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
