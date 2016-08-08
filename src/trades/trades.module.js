"use strict";

angular.module('trades', ['ngRoute'])
    .factory('tradesData', ['$http', function ($http) {
        return function (callback, onError) {
            $http.get('https://pases1.herokuapp.com/trades?start=0&limit=10').then(callback, onError);
        };
    }]);

