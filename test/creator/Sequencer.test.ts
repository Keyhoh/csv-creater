import assert from "assert";

import { Sequencer } from "../../src/index";

describe('sequencer', () => {
    const MAX = 10000;
    it("should return integer from 1 step by 1", () => {
        const defaultSeq = new Sequencer({ from: 1, step: 1 });
        for (let i = 0; i < MAX; i++) {
            assert.equal(defaultSeq.create(), i + 1);
        }
    });

    it("should return odd from 1", () => {
        const sequenceOdd = new Sequencer({ from: 1, step: 2 });
        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceOdd.create(), i * 2 + 1);
        }
    });

    it("should return even from 0", () => {
        const sequenceEven = new Sequencer({ from: 0, step: 2 });
        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceEven.create(), i * 2);
        }
    });

    it("should return sequence using default 'from' value", () => {
        const sequenceFromNaN = new Sequencer({ from: NaN, step: 3 });

        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceFromNaN.create(), i * 3 + 1);
        }
    });

    it("should return sequence using default 'step' value", () => {
        const sequenceStepByNaN = new Sequencer({ from: 101, step: NaN });

        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceStepByNaN.create(), i + 101);
        }
    });
});
