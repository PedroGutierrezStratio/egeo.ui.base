(function() {
    'use strict';

    angular
        .module('egeo.buttons')
        .controller('EgeoInputController', EgeoInputController);

    function EgeoInputController($scope, $element) {
        var vm = this;

        vm.hasHelp = false;
        vm.isPopoverShown = false;
        vm.id = $scope.$id;
    }
})();
