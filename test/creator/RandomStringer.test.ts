import RandomStringer from "../../src/creator/RandomStringer";
import assert = require("assert");

describe('RandomStringer', () => {
    it("should return string of length 10", () => {
        const randomStringer = new RandomStringer({ length: 10 });
        const randomString = randomStringer.create();
        assert.equal(randomString == null ? -1 : randomString.length, 10);
    });
})