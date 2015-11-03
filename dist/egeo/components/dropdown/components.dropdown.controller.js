(function() {
    'use strict';

    angular
        .module('egeo.dropdown')
        .controller('DropdownController', DropdownController);

    function DropdownController($scope) {
        var vm = this;

        vm.isOpen = false;
        vm.click  = toggleMenu;

        function toggleMenu() {
            vm.isOpen = !vm.isOpen;

            console.log("--> vm.isOpen::to::" + vm.isOpen);
        }
    }
})();
