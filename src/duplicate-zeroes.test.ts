import { duplicateZeroes } from "./duplicate-zeroes";

describe('duplicate zeroes tests', () => {

    test('[1, 0, 2, 3, 0, 4, 5, 0] - expected [1, 0, 0, 2, 3, 0, 0, 4]', () => {
        const input = [1, 0, 2, 3, 0, 4, 5, 0];
        const expected = [1, 0, 0, 2, 3, 0, 0, 4];
        duplicateZeroes(input)
        expect(input).toEqual(expected);
    });

    test('[1, 2, 3] - expected [1, 2, 3]', () => {
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        duplicateZeroes(input)
        expect(input).toEqual(expected);
    });
});
