"use strict";

angular.module('rlTrades').controller('addController', rlTradesAddFormController);

function rlTradesAddFormController($scope, rlTradesResource) {
    // dummy id expected by the server.  This id will be ignored.
    // ToDo: get rid of this restriction on the server
    const id = "00000000-0000-4000-A000-000000000000";
    $scope.trade = {id: id};
    $scope.removing = [];
    $scope.submit = function () {
        const newTrade = new rlTradesResource($scope.trade);
        newTrade.$save(function (tradeWithId) {
            $scope.trades.push(tradeWithId);
        });
    };
    $scope.remove = function (index) {
        const trade = $scope.trades[index];
        const tradeResource = new rlTradesResource(trade);
        $scope.removing[index] = true;
        tradeResource.$remove({id: trade.id}, function () {
            $scope.removing[index] = false;
            $scope.trades.splice(index, 1);
        });
    }
}