import * as assert from 'assert';

import { randomer } from "../../src/executable/randomer";

describe('randomer', () => {
    it('should return from integer', () => {
        randomer.create = () => 0;

        const defaultRand = randomer();
        assert.equal(defaultRand(), 0);

        const randFromNegative = randomer(-10);
        assert.equal(randFromNegative(), -10);

        const randFromPositive = randomer(10);
        assert.equal(randFromPositive(), 10);

        const normalFromTo = randomer(30, 50);
        assert.equal(normalFromTo(), 30);

        const reverseFromTo = randomer(40, -20);
        assert.equal(reverseFromTo(), 40);
    });

    it('should return to integer', () => {
        randomer.create = () => 0.99;

        const defaultRand = randomer();
        assert.equal(defaultRand(), 1);

        const randFromNegative = randomer(-10);
        assert.equal(randFromNegative(), 1);

        const randFromPositive = randomer(10);
        assert.equal(randFromPositive(), 1);

        const normalFromTo = randomer(30, 50);
        assert.equal(normalFromTo(), 50);

        const reverseFromTo = randomer(40, -20);
        assert.equal(reverseFromTo(), -20);
    });
})