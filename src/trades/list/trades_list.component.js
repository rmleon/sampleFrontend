"use strict";

angular.module('rlTrades').component('rlTradesList',
    {
        templateUrl: 'trades/list/trades_list.template.html',
        bindings: {
            trades: '<'
        }
    }
);

angular.module('rlTrades').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/', {
            template: '<rl-trades-list trades="$resolve.trades"></rl-trades-list>',
            resolve: {
                trades: ['rlTradesResource', function (rlTradesResource) {
                    return rlTradesResource.query({start: 0, limit: 100}).$promise.then(function (data) {
                        return data;
                    });
                }]
            }
        });
    }]
);