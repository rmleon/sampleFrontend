"use strict";

angular.module('rlTrades').factory('rlTradesResource', rlTradesResourceFactory);

function rlTradesResourceFactory($resource, rlTradesBaseURL) {
    const getUrl = rlTradesBaseURL + '?start=:start&limit=:limit';
    const urlWithId = rlTradesBaseURL + '/:id';
    return $resource(rlTradesBaseURL, null, {
        query: {
            method: 'GET',
            url: getUrl,
            isArray: true,
            cache: true,
        },
        save: {
            method: 'POST'
        },
        remove: {
            url: urlWithId,
            method: 'DELETE'
        },
        update: {
            url: urlWithId,
            method: 'PUT'
        }
    });
}