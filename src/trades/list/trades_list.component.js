"use strict";

angular.module('rlTrades').component('rlTradesList',
    {
        templateUrl: 'trades/list/trades_list.template.html',
        bindings: {
            trades: '<'
        },
        controller: rlTradesListController
    }
);

function rlTradesListController($scope, rlTradesResource) {
    rlTradesResource.query({start: 0, limit: 100}).$promise.then(function (data) {
        $scope.trades = data;
    });
}

angular.module('rlTrades').config(rlTradesConfig);

function rlTradesConfig($routeProvider) {
    $routeProvider.when('/', {
        template: '<rl-trades-list></rl-trades-list>'
    });
}
