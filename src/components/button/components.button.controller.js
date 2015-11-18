(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('EgeoButtonController', EgeoButtonController);

    function EgeoButtonController($scope, $element) {
        var vm = this;

        vm.hasPopover = false;
        vm.isOpenPopover = false;
        vm.togglePopover = togglePopover;

        function togglePopover() {
            if (vm.isOpenPopover) {
                closePopover();
            } else {
                openPopover();
            }
        }

        function openPopover() {
            angular.element($element.parent().find('[data-id="' + $scope.popover + '"]')).addClass('egeo-c-popover--open');
            vm.isOpenPopover = true;
        }

        function closePopover() {
            angular.element($element.parent().find('[data-id="' + $scope.popover + '"]')).removeClass('egeo-c-popover--open');
            vm.isOpenPopover = false;
        }
    }
})();
