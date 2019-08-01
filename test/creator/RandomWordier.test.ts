import { RandomWordier } from "../../src/index";
import assert = require("assert");

describe('RandomWordier', () => {
    const words = ['first', 'second', 'third', '4th', '5th'];
    it("should return word in array", () => {
        for (let i = 0; i < words.length; i++) {
            const randomWordier = new RandomWordier({ words: words }, () => i / words.length);
            assert.equal(randomWordier.create(), words[i]);
        }
    });
});