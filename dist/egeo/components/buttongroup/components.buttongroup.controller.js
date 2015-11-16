(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('EgeoButtongroupController', EgeoButtongroupController);

    function EgeoButtongroupController($scope, $element) {
        var vm = this;

        vm.areHiddenItems = false;
        vm.isPopoverShown = false;
        vm.popoverItems = null;
    }
})();
