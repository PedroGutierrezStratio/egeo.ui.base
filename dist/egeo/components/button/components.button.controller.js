(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('EgeoButtonController', EgeoButtonController);

    function EgeoButtonController($scope, $element) {
        var vm = this,
            popover,
            popoverArrow,
            popoverArrowShadow,
            isPopoverInitialized;

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
            if (!isPopoverInitialized) initializePopover();
            getPopover().addClass('egeo-c-popover--open');
            getPopoverArrow().addClass('egeo-c-popover__arrow--open');
            getPopoverArrowShadow().addClass('egeo-c-popover__arrow-shadow--open');
            vm.isOpenPopover = true;
        }

        function closePopover() {
            getPopover().removeClass('egeo-c-popover--open');
            getPopoverArrow().removeClass('egeo-c-popover__arrow--open');
            getPopoverArrowShadow().removeClass('egeo-c-popover__arrow-shadow--open');
            vm.isOpenPopover = false;
        }

        function initializePopover() {
            getPopover().bind('mouseout', closePopover);
        }

        function getPopover() {
            if (!popover) {
                popover = angular.element($element.parent().find('[data-id="' + $scope.popover + '"]'));
            }

            return popover;
        }

        function getPopoverArrow() {
            if (!popoverArrow) {
                popoverArrow = angular.element($element.find('.egeo-c-popover__arrow'));
            }

            return popoverArrow;
        }

        function getPopoverArrowShadow() {
            if (!popoverArrowShadow) {
                popoverArrowShadow = angular.element($element.find('.egeo-c-popover__arrow-shadow'));
            }

            return popoverArrowShadow;
        }
    }
})();
