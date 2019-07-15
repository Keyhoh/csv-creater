import * as assert from 'assert';

import RandomInteger from "../../src/creator/RandomInteger";

describe('RandomInteger', () => {
    it("should return 'from' integer", () => {
        const defaultRand = new RandomInteger({ from: 0, len: 1, random: () => 0 });
        assert.equal(defaultRand.create(), 0);

        const randFromNegative = new RandomInteger({ from: -10, len: 1, random: () => 0 });
        assert.equal(randFromNegative.create(), -10);

        const randFromPositive = new RandomInteger({ from: 10, len: 1, random: () => 0 });
        assert.equal(randFromPositive.create(), 10);

        const normalFromTo = new RandomInteger({ from: 0, len: 10, random: () => 0 });
        assert.equal(normalFromTo.create(), 0);

        const reverseFromTo = new RandomInteger({ from: 0, len: -10, random: () => 0 });
        assert.equal(reverseFromTo.create(), 0);
    });

    it("should return 'len' th integer", () => {
        const defaultRand = new RandomInteger({ from: 0, len: 1, random: () => 0.99 });
        assert.equal(defaultRand.create(), 0);

        const randFromNegative = new RandomInteger({ from: -10, len: 1, random: () => 0.99 });
        assert.equal(randFromNegative.create(), -10);

        const randFromPositive = new RandomInteger({ from: 10, len: 1, random: () => 0.99 });
        assert.equal(randFromPositive.create(), 10);

        const normalFromTo = new RandomInteger({ from: 0, len: 10, random: () => 0.99 });
        assert.equal(normalFromTo.create(), 9);

        const reverseFromTo = new RandomInteger({ from: 0, len: -10, random: () => 0.99 });
        assert.equal(reverseFromTo.create(), -9);
    });
})