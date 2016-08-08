'use strict';

angular.module('trades').component('list',
    {
        templateUrl: 'trades/list/trades_list.template.html',
        controller: function() {

        }
    })
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/list', {
                templateUrl: 'trades/components/trades_list.component.html',
                controller: 'TradesListComponentCtrl'
            });
        }]
    );
