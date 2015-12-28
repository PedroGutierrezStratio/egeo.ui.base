(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('EgeoCheckboxController', EgeoCheckboxController);

    function EgeoCheckboxController($scope, $element) {
        var vm = this;

        vm.hasHelp = false;
        vm.isHelpShown = false;
        vm.id = $scope.$id;
        vm.isFocused = false;

        function onFocus() {
            vm.isFocused = true;
        }
    }
})();
