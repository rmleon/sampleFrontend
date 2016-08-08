/* eslint-env protractor */
/* global describe, expect, it, beforeEach, inject, module */

describe('Trades', function () {

    var Trades;
    beforeEach(module('trades'));
    beforeEach(inject(function (_Trades_) {
        Trades = _Trades_;
    }));

    describe('Constructor', function () {

        it('assigns a name', function () {
            expect(new Trades({count: 2})).to.have.property('count', '2');
        });

    });

});