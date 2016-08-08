'use strict';

angular.module('TopLevelApp', ['ngRoute', 'trades', 'ngMaterial'])
    .config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function ($locationProvider, $routeProvider, $mdThemingProvider) {
        $routeProvider
            // .when('/trades/:tradeId')
            .otherwise({redirectTo: '/list'});

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');

        // $locationProvider.html5Mode(true);
    }]).controller('MainController', ['tradesData', '$scope', '$mdToast', function (tradesData, $scope, $mdToast) {
        tradesData(function (data) {
                $scope.trades = data;
            },
            function (err) {
                $mdToast.show($mdToast.simple().textContent(err));
            });
    }]
);
