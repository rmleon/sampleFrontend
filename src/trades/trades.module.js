"use strict";

angular.module('rlTrades', ['ngRoute', 'ngResource', 'dataGrid']);

angular.module('rlTrades').constant('rlTradesBaseURL',
    'https://pases1.herokuapp.com/trades');

angular.module('rlTrades').filter('direction', parseDirectionFactory);

function parseDirectionFactory() {
    return function parseDirection(input) {
        switch (input) {
            case 'B':
                return 'Buy';
            case 'S':
                return 'Sell';
            default:
                return input;
        }
    }
}