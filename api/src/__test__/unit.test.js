const { isUUID } = require('../util/util');

describe('Check isUUID function', () => {
    it('check on bad uuid format', () => {
        expect(isUUID(1)).toBe(false);
        expect(isUUID(null)).toBe(false);
        expect(isUUID("")).toBe(false);
    });

    it('check a valid uuid', () => {
        expect(isUUID("504d44cf-f91b-4370-9b86-710bc836e6c7")).toBeTruthy()
    });
});