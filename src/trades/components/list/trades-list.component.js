'use strict';

angular.module('trades.list', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'trades/components/list.html',
            controller: 'TradesListComponentCtrl'
        });
    }])
    .controller('TradesListComponentCtrl', ['$http', '$scope', function ($http, $scope) {
        $http.get('https://pases1.herokuapp.com/trades?start=0&limit=10').then(function (response) {
            $scope.trades = response.data;
        }, function ioError(response) {
            $scope.errorMessage = response.message;
        });
    }]);
