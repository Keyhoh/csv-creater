import * as assert from 'assert';

import RandomInteger from "../../src/executable/RandomInteger";

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

    it("should return 'from + len' integer", () => {
        const defaultRand = new RandomInteger({ from: 0, len: 1, random: () => 1 });
        assert.equal(defaultRand.create(), 1);

        const randFromNegative = new RandomInteger({ from: -10, len: 1, random: () => 1 });
        assert.equal(randFromNegative.create(), -9);

        const randFromPositive = new RandomInteger({ from: 10, len: 1, random: () => 1 });
        assert.equal(randFromPositive.create(), 11);

        const normalFromTo = new RandomInteger({ from: 0, len: 10, random: () => 1 });
        assert.equal(normalFromTo.create(), 10);

        const reverseFromTo = new RandomInteger({ from: 0, len: -10, random: () => 1 });
        assert.equal(reverseFromTo.create(), -10);
    });
})