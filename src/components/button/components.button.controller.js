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
            angular.element($element.find('.egeo-c-popover__arrow')).addClass('egeo-c-popover__arrow--open');
            angular.element($element.find('.egeo-c-popover__arrow-shadow')).addClass('egeo-c-popover__arrow-shadow--open');
            vm.isOpenPopover = true;
        }

        function closePopover() {
            angular.element($element.parent().find('[data-id="' + $scope.popover + '"]')).removeClass('egeo-c-popover--open');
            angular.element($element.find('.egeo-c-popover__arrow')).removeClass('egeo-c-popover__arrow--open');
            angular.element($element.find('.egeo-c-popover__arrow-shadow')).removeClass('egeo-c-popover__arrow-shadow--open');
            vm.isOpenPopover = false;
        }
    }
})();
