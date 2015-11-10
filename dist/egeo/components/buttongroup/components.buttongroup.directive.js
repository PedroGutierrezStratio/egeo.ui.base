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
            scope.buttonsHidden = false;
            scope.lastLimit = null;

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

                    //if (isElementsWiderThanContainer()) {
                        renderElements();
                    //}
                }
            }

            function isElementsWiderThanContainer() {
                // Calculate the space used only one time
                if (!scope.childrenWidth) {
                    var i = element.children().length;

                    while (i--) {
                        // Include in the width the paddings and margins
                        scope.childrenWidth += angular.element(element.children()[i]).outerWidth(true);
                    }
                }

                return scope.childrenWidth > element.parent().width();
            }

            function renderElements() {
                var limit = null;

                // First, we have to calculate how many items fit in the available space
                limit = getLastVisibleItemIndex();

                // Only it is needed to take actions if the limit changed
                // If limit is null means that all items must be shown
                if (limit != scope.lastLimit) {
                    if (limit == null) {
                        showItems();
                    } else {
                        if (scope.lastLimit == null) {
                            hideItems(element.children().length - 2, limit);
                        } else {
                            if (limit > scope.lastLimit) {
                                showItems(limit);
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

                scope.buttonsHidden = true;

                if (i >= to) {
                    while (i >= to) {
                        child = angular.element(element.children()[i]);

                        if (!child.hasClass('ng-hide')) child.addClass('ng-hide');
                        
                        i--;
                    }

                    if (moreButton.hasClass('ng-hide')) moreButton.removeClass('ng-hide');
                }
            }

            function showItems(from) {
                var to = element.children().length - 1,
                    item = to,
                    child = null,
                    moreButton = angular.element(element.find('.egeo-c-button--tool-ellipsis'));

                from = typeof from !== 'undefined' ? from : 0;

                while (item >= from) {
                    child = angular.element(element.children()[item]);

                    if (child.hasClass('ng-hide')) child.removeClass('ng-hide');

                    item--;
                }

                if (from == 0) { 
                    if (!moreButton.hasClass('ng-hide')) moreButton.addClass('ng-hide');

                    scope.buttonsHidden = false;
                }
            }

            function getLastVisibleItemIndex() {
                var i = 0,
                    iMax = element.children().length,
                    widthBuffer = 0,
                    childWidth = 0,
                    moreButtonWidth = angular.element(element.find('.egeo-c-button--tool-ellipsis')).outerWidth(true),
                    limit = null;

                // If we already have a limit, it is not needed keep the loop working
                while (i < iMax && !limit) {
                    // We will compare button to button

                    childWidth = angular.element(element.children()[i]).outerWidth(true);
                    
                    if ((widthBuffer + childWidth) <= (element.parent().width() - moreButtonWidth)) {
                        widthBuffer += childWidth;
                    } else {
                        limit = i - 1;
                    }

                    i++;
                }

                return limit;
            }
        }
    }
})();
