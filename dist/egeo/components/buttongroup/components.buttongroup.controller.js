(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('EgeoButtongroupController', EgeoButtongroupController);

    function EgeoButtongroupController($scope, $element) {
        var vm = this;

        vm.areHiddenItems = false;
        vm.isPopoverShown = false;
        vm.itemsHidden = [];
        vm.popoverItems = [];
        vm.id = $scope.$id;
    }
})();
