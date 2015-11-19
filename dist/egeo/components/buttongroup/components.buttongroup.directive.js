(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .directive('egeoCButtongroup', egeoCButtongroup);

    egeoCButtongroup.$inject = ['EgeoConfig', 'EgeoChildrenClass', '$window'];

    function egeoCButtongroup(EgeoConfig, EgeoChildrenClass, $window) {
        var directive = {
            controller: 'EgeoButtongroupController as vm',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
                small: '@'
            },
            templateUrl: EgeoConfig.getEgeoPath() + '/components/buttongroup/components.buttongroup.tpl.html',
            transclude: true
        }

        return directive;

        function link(scope, element, attrs, ctrl, transclude) {
            var lastWidth = null,
                maxLimit = null,
                lastLimit = null,
                moreButtonWidth = 43;

            // Replace the #transclude tag with transclude content
            element.find('#transclude').replaceWith(transclude());

            // Apply the subclass to all buttons in the group
            EgeoChildrenClass('egeo-c-buttongroup__item');

            // Check regularly if the width changes
            setInterval(checkWidth, 400);

            function checkWidth() {
                // Do something only if the width changed
                if (lastWidth != element.parent().width()) {
                    lastWidth = element.parent().width();

                    renderElements();
                }
            }

            function renderElements() {
                var limit = null;

                if (maxLimit == null) maxLimit = element.children().length - 1;

                // First, we have to calculate how many items fit in the available space
                limit = getLastVisibleItemIndex();

                // Only it is needed to take actions if the limit changed
                // If limit is null means that all items must be shown
                if (limit != lastLimit) {
                    if (limit == null) {
                        showItems(0, maxLimit);
                      } else {
                        if (lastLimit == null) {
                            hideItems(maxLimit, limit);
                        } else {
                            if (limit > lastLimit) {
                                showItems(lastLimit, limit);
                            } else {
                                hideItems(lastLimit, limit);
                            }
                        }
                    } 
                }
                            
                lastLimit = limit;
            }

            function hideItems(from, to) {
                var i = from,
                    child = null;

                while (i > to) {
                    child = angular.element(element.children()[i]);

                    hideItem(child);

                    i--;
                }

                renderPopover();
                renderMoreButton();
            }

            function showItems(from, to) {
                var item = to,
                    child = null;

                from = typeof from !== 'undefined' ? from : 0;

                while (item >= from) {
                    child = angular.element(element.children()[item]);

                    showItem(child);

                    item--;
                }

                renderPopover();
                renderMoreButton();
            }

            function renderPopover() {
                var i,
                    buttongroupItems,
                    item;

                ctrl.popoverItems = angular.element(element.find('.egeo-c-popover__listitems')).children();
                buttongroupItems = element.children().slice(0, element.children().length - 1);
                i = ctrl.popoverItems.length;

                while (i--) {
                    item = angular.element(ctrl.popoverItems[i]);
                    item.attr('class', 'egeo-c-popover__listitem ng-isolate-scope');
                    item.html(item.html() + item.attr('data-label'));

                    if (angular.element(buttongroupItems[i]).hasClass('ng-hide')) {
                        item.removeClass('ng-hide');
                    } else {
                        item.addClass('ng-hide');
                    }
                }

                if ((element.find('.egeo-c-popover').parent().parent().offset().left + element.find('.egeo-c-popover').outerWidth()) >= $(window).innerWidth()) {
                    element.find('.egeo-c-popover').addClass('egeo-c-popover--right-aligned');
                }

                if (ctrl.itemsHidden.length > 0) {
                    ctrl.isPopoverShown = true;
                } else {
                    ctrl.isPopoverShown = false;
                }
            }

            function renderMoreButton() {
                if (ctrl.itemsHidden <= 0) { 
                    ctrl.itemsHidden = []; // fallback to avoid problems if something goes wrong
                    ctrl.areItemsHidden = false;
                } else {
                    ctrl.areItemsHidden = true;
                }

                scope.$apply();
            }

            function hideItem(item) {
                if (!isItemHidden(item)) { 
                    fromGroupToPopover(item);
                }
            }

            function showItem(item) {
                if (isItemHidden(item)) {
                    fromPopoverToGroup(item);
                }
            }

            function fromPopoverToGroup(item) {
                var items = ctrl.itemsHidden.length,
                    i = 0,
                    index = null;

                // Remove the hidden class
                item.removeClass('ng-hide');

                // Remove the item from the array which contains the hidden items
                while (items == ctrl.itemsHidden.length && i < ctrl.itemsHidden.length) {
                    if (ctrl.itemsHidden[i].index() == item.index()) {
                        ctrl.itemsHidden.splice(i, 1);
                    }

                    i++;
                }
            }

            function fromGroupToPopover(item) {
                // Add the hidden class
                item.addClass('ng-hide'); 

                // Add the item to the array which contains the hidden items
                ctrl.itemsHidden.push(item);
            }

            function isItemHidden(item) {
                var i = 0;
                var response = false;

                while (i < ctrl.itemsHidden.length && !response) {
                    if (ctrl.itemsHidden[i].index() == item.index()) {
                        response = true;
                    }

                    i++;
                }

                return response;
            }

            function getLastVisibleItemIndex() {
                var i = 0,
                    iMax = element.children().length -1,
                    widthBuffer = 0,
                    childWidth = 0,
                    correctionFactor = 3, // The correction factor is used due to the separation the browsers add to the inline-block elements
                    limit = null,
                    buttonFits = false;

                // If we already have a limit, it is not needed keep the loop working
                while (i < iMax && limit == null) {
                    // We will compare button to button

                    childWidth = angular.element(element.children()[i]).outerWidth(true) + correctionFactor;

                    if (i == (iMax - 1)) { // Is the last item before the more button
                        buttonFits = (widthBuffer + childWidth) < element.parent().width();
                    } else {
                        buttonFits = (widthBuffer + childWidth) < (element.parent().width() - moreButtonWidth);
                    }
                    
                    if (buttonFits) {
                        widthBuffer += childWidth;
                    } else {
                        limit = i - 1; // Index of the last visible item
                    }

                    i++;
                }

                if (limit == null) { limit = maxLimit; }

                return limit;
            }
        }
    }
})();
