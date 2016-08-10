"use strict";

angular.module('rlApp', ['ngRoute', 'rlTrades']);

angular.module('rlApp').controller('rlMainController', function () {
    // ToDo
    // Empty controller for now to create a new scope
});

/**
 * This is required to activate the navigation.
 */
angular.module('rlApp').run(['$route', function () {
}]);


/**
 * Required by MDL.
 */
angular.module('rlApp').run(rlAppRun);

function rlAppRun($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        if (window.componentHandler) {
            window.componentHandler.upgradeAllRegistered();
        }
    });
}