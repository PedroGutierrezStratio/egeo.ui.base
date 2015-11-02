(function() {
    'use strict';

    angular
        .module('egeo.childrenClass', [])
        .factory('EgeoChildrenClass', EgeoChildrenClass);

    function EgeoChildrenClass(){
        return function(className){
            function link(scope, elem) {

                setTimeout(function(){
                    elem.children().addClass(className);
                }, 0);
            }

            return link;
        }
    }

})();
