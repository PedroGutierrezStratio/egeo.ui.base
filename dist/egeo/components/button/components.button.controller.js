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
            angular.element(getPopover().addClass('egeo-c-popover--open');
            angular.element(getPopoverArrow().addClass('egeo-c-popover__arrow--open');
            angular.element(getPopoverArrowShadow().addClass('egeo-c-popover__arrow-shadow--open');
            vm.isOpenPopover = true;
        }

        function closePopover() {
            angular.element(getPopover().removeClass('egeo-c-popover--open');
            angular.element(getPopoverArrow().removeClass('egeo-c-popover__arrow--open');
            angular.element(getPopoverArrowShadow().removeClass('egeo-c-popover__arrow-shadow--open');
            vm.isOpenPopover = false;
        }

        function initializePopover() {
            getPopover().bind('mouseout', closePopover);
        }

        function getPopover() {
            if (!popover) {
                popover = $element.parent().find('[data-id="' + $scope.popover + '"]'));
            }

            return popover;
        }

        function getPopoverArrow() {
            if (!popoverArrow) {
                popoverArrow = $element.find('.egeo-c-popover__arrow'));
            }

            return popoverArrow;
        }

        function getPopoverArrowShadow() {
            if (!popoverArrowShadow) {
                popoverArrowShadow = $element.find('.egeo-c-popover__arrow-shadow'));
            }

            return popoverArrowShadow;
        }
    }
})();
