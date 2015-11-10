(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .directive('egeoCButtongroup', egeoCButtongroup);

    egeoCButtongroup.$inject = ['EgeoConfig', 'EgeoChildrenClass'];

    function egeoCButtongroup(EgeoConfig, EgeoChildrenClass) {
        var directive = {
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
            scope.childrenWidth = null;
            scope.lastWidth = null;
            scope.maxLimit = null; 
            scope.lastLimit = null;
            scope.itemsHidden = 0;

            // Replace the #transclude tag with transclude content to
            // put the ellipsis button at same level than the trascluded
            // ones.
            element.find('#transclude').replaceWith(transclude());

            // Apply the subclass to all buttons in the group
            EgeoChildrenClass('egeo-c-buttongroup__item');

            // Check regularly if the width changes
            setInterval(checkWidth, 1000);

            function checkWidth() {
                // Do something only if the width changed
                if (scope.lastWidth != element.parent().width()) {
                    scope.lastWidth = element.parent().width();

                    renderElements();
                }
            }

            function renderElements() {
                var limit = null;

                if (scope.maxLimit == null) scope.maxLimit = element.children().length - 2; // 2 because 1 is to avoid more button and other 1 to match the array index with the length counter;

                // First, we have to calculate how many items fit in the available space
                limit = getLastVisibleItemIndex();

                // Only it is needed to take actions if the limit changed
                // If limit is null means that all items must be shown
                if (limit != scope.lastLimit) {
                    if (limit == null) {
                        showItems(0, scope.maxLimit);
                    } else {
                        if (scope.lastLimit == null) {
                            hideItems(scope.maxLimit, limit);
                        } else {
                            if (limit > scope.lastLimit) {
                                showItems(scope.lastLimit, limit);
                            } else {
                                hideItems(scope.lastLimit, limit);
                            }
                        }
                    } 
                }
                            
                scope.lastLimit = limit;
            }

            function hideItems(from, to) {
                var i = from,
                    child = null,
                    moreButton = angular.element(element.find('.egeo-c-button--tool-ellipsis'));

                while (i > to) {
                    child = angular.element(element.children()[i]);

                    hideItem(child);

                    i--;
                }

                if (scope.itemsHidden > 0) {
                    if (moreButton.hasClass('ng-hide')) moreButton.removeClass('ng-hide');
                }
            }

            function showItems(from, to) {
                var item = to,
                    child = null,
                    moreButton = angular.element(element.find('.egeo-c-button--tool-ellipsis'));

                from = typeof from !== 'undefined' ? from : 0;

                while (item >= from) {
                    child = angular.element(element.children()[item]);

                    showItem(child);

                    item--;
                }

                if (scope.itemsHidden == 0) { 
                    if (!moreButton.hasClass('ng-hide')) moreButton.addClass('ng-hide');
                }
            }

            function hideItem(item) {
                if (!item.hasClass('ng-hide')) { 
                    item.addClass('ng-hide'); 
                    scope.itemsHidden++;
                }
            }

            function showItem(item) {
                if (item.hasClass('ng-hide')) {
                    item.removeClass('ng-hide');
                    scope.itemsHidden--;
                }
            }

            function getLastVisibleItemIndex() {
                var i = 0,
                    iMax = element.children().length,
                    widthBuffer = 0,
                    childWidth = 0,
                    correctionFactor = 3, // The correction factor is used due to the separation the browsers add to the inline-block elements
                    moreButtonWidth = angular.element(element.find('.egeo-c-button--tool-ellipsis')).outerWidth(true) + correctionFactor,
                    limit = null;

                // If we already have a limit, it is not needed keep the loop working
                while (i < iMax && limit == null) {
                    // We will compare button to button

                    childWidth = angular.element(element.children()[i]).outerWidth(true) + correctionFactor;
                    
                    if ((widthBuffer + childWidth) < (element.parent().width() - moreButtonWidth)) {
                        widthBuffer += childWidth;
                    } else {
                        limit = i - 1; // Index of the last visible item
                    }

                    i++;
                }

                if (limit == null) limit = scope.maxLimit;

                return limit;
            }
        }
    }
})();
