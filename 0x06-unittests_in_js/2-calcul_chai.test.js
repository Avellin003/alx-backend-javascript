const { expect } = require('chai');
const calculate = require('./2-calcul_chai');

describe('calculate', function() {
    describe('SUM', function() {
        it('should return 5 when rounding 2.4 and 2.6', function() {
            expect(calculate('SUM', 2.4, 2.6)).to.equal(5);
        });

        it('should return 4 when rounding 1.6 and 2.4', function() {
            expect(calculate('SUM', 1.6, 2.4)).to.equal(4);
        });
    });

    describe('SUBTRACT', function() {
        it('should return 0 when rounding 2.5 and 2.5', function() {
            expect(calculate('SUBTRACT', 2.5, 2.5)).to.equal(0);
        });

        it('should return -1 when rounding 2.3 and 3.2', function() {
            expect(calculate('SUBTRACT', 2.3, 3.2)).to.equal(-1);
        });
    });

    describe('DIVIDE', function() {
        it('should return 1 when rounding 2.5 and 2.5', function() {
            expect(calculate('DIVIDE', 2.5, 2.5)).to.equal(1);
        });

        it('should return 2 when rounding 5.9 and 2.4', function() {
            expect(calculate('DIVIDE', 5.9, 2.4)).to.equal(2);
        });

        it('should return "Error" when dividing by 0', function() {
            expect(calculate('DIVIDE', 5, 0.4)).to.equal('Error');
        });
    });

    describe('Invalid Type', function() {
        it('should throw an error for invalid type', function() {
            expect(() => calculate('MULTIPLY', 2, 3)).to.throw('Invalid type');
        });
    });
});
