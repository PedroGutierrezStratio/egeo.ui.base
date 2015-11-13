(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('EgeoButtongroupController', EgeoButtongroupController);

    function EgeoButtongroupController($scope) {
        var vm = this;

        vm.areHiddenItems = false;

        console.log($scope);
    }
})();
