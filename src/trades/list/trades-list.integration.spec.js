/* eslint-env protractor */
/* global describe, expect, it */
describe('angularjs trades  list', function () {
    it('should display trade', function () {
        browser.get('localhost:9000');

        element(by.model('trades.todoText')).sendKeys('write first protractor test');

        var tradesList = element.all(by.repeater('trade in trades'));
        expect(tradesList.count()).toEqual(1);
        expect(tradesList.get(2).getText()).toEqual('write first protractor test');

        expect(tradesList.count()).toEqual(2);
    });
});
