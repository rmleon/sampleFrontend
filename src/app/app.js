'use strict';

angular.module('app', ['$ngRoute', '$locationProvider', '$routeProvider', '$mdThemingProvider', '$mdIconProvider', 'trades'])
    .config(function ($ngRoute, $locationProvider, $routeProvider, $mdThemingProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/list'});

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    });