"use strict";

angular.module('rlTrades').controller('addController', rlTradesAddFormController);

function rlTradesAddFormController($scope, rlTradesResource) {
    // dummy id expected by the server.  This id will be ignored.
    // ToDo: get rid of this restriction on the server
    const id = "00000000-0000-4000-A000-000000000000";
    $scope.trade = {id: id};
    $scope.submit = function () {
        const newTrade = new rlTradesResource($scope.trade);
        newTrade.$save(function (savedTrade) {
            $scope.trades.push(savedTrade);
        });
    };
}