import { StringProcessor } from "../../../src/index";
import { Sequencer } from "../../../src/index";
import assert = require("assert");
import { ConstantStringer } from "../../../src/index";

describe('StringProcessor', () => {
    it("should return processed string", () => {
        const from = 0;
        const step = 1;
        const defaultSeq = new Sequencer({ from: from, step: step });
        const addPrefix = new StringProcessor({ stringCreator: defaultSeq, processor: str => `prefix-${str}` });
        for (let i = from; i < 512; i += step) {
            assert.equal(addPrefix.create(), `prefix-${i}`);
        }
    });

    it("should return null if creator create null", () => {
        const nullCreator = new ConstantStringer({ value: null });
        const processor = new StringProcessor({ stringCreator: nullCreator, processor: str => 'a' });
        assert.equal(processor.create(), null);
    });
});