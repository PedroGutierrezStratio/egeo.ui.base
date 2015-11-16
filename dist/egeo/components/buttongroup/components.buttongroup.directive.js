(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .directive('egeoCButtongroup', egeoCButtongroup);

    egeoCButtongroup.$inject = ['EgeoConfig', 'EgeoChildrenClass'];

    function egeoCButtongroup(EgeoConfig, EgeoChildrenClass) {
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
                itemsHidden = [],
                moreButtonWidth = 43;

            // Replace the #transclude tag with transclude content to
            // put the ellipsis button at same level than the trascluded
            // ones.
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
                console.log('hideItems(from: ' + from + ', to: ' + to);
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
                console.log('showItems(from: ' + from + ', to: ' + to);
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
                var i = itemsHidden.length;
                var output = "";

                ctrl.popoverItems = null;

                while (i--) {
                    output = jQuery("<p>").append(itemsHidden[i].clone()).html() + output;
                }

                if (output) {
                    ctrl.isPopoverShown = true;
                } else {
                    ctrl.isPopoverShown = false;
                }

                ctrl.popoverItems = output;
            }

            function renderMoreButton() {
                if (itemsHidden <= 0) { 
                    itemsHidden = []; // fallback to avoid problems if something goes wrong
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
                var items = itemsHidden.length,
                    i = 0,
                    index = null;

                // Remove the hidden class
                item.removeClass('ng-hide');

                // Remove the item from the array which contains the hidden items
                while (items == itemsHidden.length && i < itemsHidden.length) {
                    if (itemsHidden[i].index() == item.index()) {
                        itemsHidden.splice(i, 1);
                    }

                    i++;
                }
            }

            function fromGroupToPopover(item) {
                // Add the hidden class
                item.addClass('ng-hide'); 

                // Add the item to the array which contains the hidden items
                itemsHidden.push(item);
            }

            function isItemHidden(item) {
                var i = 0;
                var response = false;

                while (i < itemsHidden.length && !response) {
                    if (itemsHidden[i].index() == item.index()) {
                        response = true;
                    }

                    i++;
                }

                return response;
            }

            function getLastVisibleItemIndex() {
                var i = 0,
                    iMax = element.children().length,
                    widthBuffer = 0,
                    childWidth = 0,
                    correctionFactor = 3, // The correction factor is used due to the separation the browsers add to the inline-block elements
                    limit = null,
                    buttonFits = false;

                if (ctrl.areItemsHidden) iMax--; // This is needed due to, in this case, the div which contains the popover is counted as child

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
