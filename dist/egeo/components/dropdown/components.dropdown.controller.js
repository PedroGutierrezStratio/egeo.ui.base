(function() {
    'use strict';

    angular
        .module('egeo.dropdown')
        .controller('EgeoDropdownController', EgeoDropdownController);

    function EgeoDropdownController($scope) {
        var vm = this;

        vm.isOpen = false;
        vm.click  = toggleMenu;

        function toggleMenu() {
            vm.isOpen = !vm.isOpen;
        }
    }
})();
