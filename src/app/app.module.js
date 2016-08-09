"use strict";

angular.module('rlApp', ['ngRoute', 'rlTrades', 'ngMaterial']).config(['$mdThemingProvider', function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    }]
);

angular.module('rlApp').controller('rlMainController', function () {
    // ToDo
});

angular.module('rlApp').run(['$route', function () {
}]);