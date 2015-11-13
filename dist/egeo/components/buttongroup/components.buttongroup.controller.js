(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('egeoCButtongroupController', EgeoCButtongroupController);

    function EgeoCButtongroupController($scope) {
        var vm = this;

        vm.areHiddenItems = false;

        console.log($scope);
    }
})();
