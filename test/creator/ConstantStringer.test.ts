import ConstantStringer from "../../src/creator/ConstantStringer";
import assert = require("assert");

describe('ConstantStringer', () => {
    it("should return string of arg: string", () => {
        const stringStringer = new ConstantStringer({ value: 'string' });
        assert.equal(stringStringer.create(), 'string');
    });

    it("should return string of arg: number", () => {
        for (let i = -511; i < 512; i++) {
            const numberStringer = new ConstantStringer({ value: i });
            assert.equal(numberStringer.create(), ~~i);
        }
    });

    it("should return null", () => {
        const nullStringer = new ConstantStringer({ value: null });
        assert.equal(nullStringer.create(), null);
    });
})