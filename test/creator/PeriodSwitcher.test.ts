import assert from 'assert';

import PeriodicSwitcher from "../../src/creator/switcher/PeriodicSwitcher";

import StringCreator from "../../src/creator/StringCreator";

class ConstantStringCreator implements StringCreator {
    private returnValue: string;
    constructor(returnValue: string) {
        this.returnValue = returnValue;
    }
    create() {
        return this.returnValue;
    }
}

describe('PeriodicSwitcher', () => {
    const firstCreator = new ConstantStringCreator('first');
    const secondCreator = new ConstantStringCreator('second');

    it("should return alternately", () => {
        const returnAlternately = new PeriodicSwitcher(
            { firstCreator, secondCreator },
            { firstPeriod: 1, secondPeriod: 1 }
        );

        for (let i = 0; i < 100; i++) {
            assert.equal(returnAlternately.create(), 'first');
            assert.equal(returnAlternately.create(), 'second');
        }
    });

    it("should return alternately every two times", () => {
        const returnAlternately = new PeriodicSwitcher(
            { firstCreator, secondCreator },
            { firstPeriod: 2, secondPeriod: 2 }
        );

        for (let i = 0; i < 100; i++) {
            assert.equal(returnAlternately.create(), 'first');
            assert.equal(returnAlternately.create(), 'first');

            assert.equal(returnAlternately.create(), 'second');
            assert.equal(returnAlternately.create(), 'second');
        }
    });

    it("should return alternately each period (1, 2)", () => {
        const returnAlternatelyEachPeriod = new PeriodicSwitcher(
            { firstCreator, secondCreator },
            { firstPeriod: 1, secondPeriod: 2 }
        );
        for (let i = 0; i < 100; i++) {
            assert.equal(returnAlternatelyEachPeriod.create(), 'first');

            assert.equal(returnAlternatelyEachPeriod.create(), 'second');
            assert.equal(returnAlternatelyEachPeriod.create(), 'second');
        }
    });

    it("should return alternately each period (5, 7)", () => {
        const returnAlternatelyEachPeriod = new PeriodicSwitcher(
            { firstCreator, secondCreator },
            { firstPeriod: 2, secondPeriod: 1 }
        );
        for (let i = 0; i < 100; i++) {
            assert.equal(returnAlternatelyEachPeriod.create(), 'first');
            assert.equal(returnAlternatelyEachPeriod.create(), 'first');

            assert.equal(returnAlternatelyEachPeriod.create(), 'second');
        }
    });
})