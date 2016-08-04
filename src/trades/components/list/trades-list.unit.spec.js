describe('Trades', function () {

    var Trades;
    beforeEach(module('trades'));
    beforeEach(inject(function (_Trades_) {
        Person = _Trades_;
    }));

    describe('Constructor', function () {

        it('assigns a name', function () {
            // expect(new Person('Ben')).to.have.property('name', 'Ben');
        });

    });

});