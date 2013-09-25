var expect = require('expect.js'),
    write = require('../src/write');

describe('write', function() {
    it('null with no features', function() {
        expect(write([])).to.eql(null);
    });
    it('point geometry', function() {
        expect(write([{
            type: 'Point',
            coordinates: [0, 0]
        }])).to.eql(null);
    });
});