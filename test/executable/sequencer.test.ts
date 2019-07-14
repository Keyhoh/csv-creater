import * as assert from "assert";

import { sequencer } from "../../src/executable/sequencer";

describe('sequencer', () => {
    const MAX = 10000;
    it('should return integer from 1 step by 1', () => {
        const defaultSeq = sequencer();
        for (let i = 0; i < MAX; i++) {
            assert.equal(defaultSeq(), i + 1);
        }
    });

    it('should return integer from 10 step by 1', () => {
        const sequenceFrom10 = sequencer(10);
        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceFrom10(), i + 10);
        }
    });

    it('should return odd from 1', () => {
        const sequenceOdd = sequencer(1, 2);
        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceOdd(), i * 2 + 1);
        }
    });

    it('should return even from 0', () => {
        const sequenceEven = sequencer(0, 2);
        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceEven(), i * 2);
        }
    });

    it('should return sequence using default "from" value', () => {
        const sequenceFromNaN = sequencer(NaN, 3);

        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceFromNaN(), i * 3 + 1);
        }
    });

    it('should return sequence useing default "step" value', () => {
        const sequenceStepByNaN = sequencer(101, undefined);

        for (let i = 0; i < MAX; i++) {
            assert.equal(sequenceStepByNaN(), i + 101);
        }
    });
});
