import assert from 'assert';

import RandomSwitcher from "../../src/creator/randomSwitcher";

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

describe('RandomSwitcher', () => {
    const firstCreator = new ConstantStringCreator('first');
    const secondCreator = new ConstantStringCreator('second');

    it("should return return-value of firstCreator", () => {
        const returnFirst = new RandomSwitcher({ firstCreator: firstCreator, secondCreator: secondCreator, rate: 1 });
        for (let i = 0; i < 100; i++) {
            assert.equal(returnFirst.create(), 'first');
        }
    });

    it("should return return-value of secondCreator", () => {
        const returnSecond = new RandomSwitcher({ firstCreator: firstCreator, secondCreator: secondCreator, rate: 0 });
        for (let i = 0; i < 100; i++) {
            assert.equal(returnSecond.create(), 'second');
        }
    })
});