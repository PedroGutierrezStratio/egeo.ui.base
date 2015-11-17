(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('EgeoButtonController', EgeoButtonController);

    function EgeoButtonController($scope, $element) {
        var vm = this;

        vm.hasPopover = false;
        vm.openPopover = openPopover;

        function openPopover() {
            console.log("open popover: " + $scope.popover);
        }
    }
})();
