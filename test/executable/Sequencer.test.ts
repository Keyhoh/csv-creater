import assert from "assert";

import Sequencer from "../../src/executable/Sequencer";

describe('sequencer', () => {
    const MAX = 10000;
    it('should return integer from 1 step by 1', () => {
        const defaultSeq = new Sequencer();
        for (let i = 0; i < MAX; i++) {
            assert.equal(defaultSeq.execute(), i + 1);
        }
    });

    it('should return integer from 10 step by 1', () => {
        const sequenceFrom10 = new Sequencer(10);
        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceFrom10.execute(), i + 10);
        }
    });

    it('should return odd from 1', () => {
        const sequenceOdd = new Sequencer(1, 2);
        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceOdd.execute(), i * 2 + 1);
        }
    });

    it('should return even from 0', () => {
        const sequenceEven = new Sequencer(0, 2);
        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceEven.execute(), i * 2);
        }
    });

    it('should return sequence using default "from" value', () => {
        const sequenceFromNaN = new Sequencer(NaN, 3);

        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceFromNaN.execute(), i * 3 + 1);
        }
    });

    it('should return sequence using default "step" value', () => {
        const sequenceStepByNaN = new Sequencer(101, undefined);

        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceStepByNaN.execute(), i + 101);
        }
    });
});
