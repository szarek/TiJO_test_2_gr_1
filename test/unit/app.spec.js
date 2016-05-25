describe('app', function ()
{
    'use strict';

    var app = window.app;

    describe('reverseNumber', function () {
        it('should reverse the number', function () {
            expect(app.reverseNumber(1234)).toEqual(4321);
            expect(app.reverseNumber(765).toEqual(567));
        });
        it('should reverse the number from "number string"', function () {
            expect(app.reverseNumber('3334433')).toBe('3344333');
            expect(app.reverseNumber('9421')).toBe('1249');

        });
        it('should not return a string', function () {
            expect(app.reverseNumber(1234)).not.toBe('4321');
            expect(app.reverseNumber(4870)).not.toBe('0784');
        });
        it('should not accept not number as an argument', function () {
            expect(app.reverseNumber([])).toEqual(false);
            expect(app.reverseNumber('hhkf')).toEqual(false);
        });
        it('should return single number', function () {
            expect(app.reverseNumber(5)).toBe(5);
            expect(app.reverseNumber(2)).toBe(2);
        });
    });
});
