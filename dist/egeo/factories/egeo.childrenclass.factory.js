(function() {
    'use strict';

    angular
        .module('egeo.childrenClass', [])
        .factory('EgeoChildrenClass', EgeoChildrenClass);

    EgeoChildrenClass.$inject = ['$timeout'];

    function EgeoChildrenClass($timeout){
        return function(className){
            function link(scope, elem) {
                $timeout(function(){
                    elem.children().addClass(className);
                }, 0);
            }

            return link;
        }
    }

})();
