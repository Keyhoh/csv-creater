import RandomCharacters from "../../src/creator/RandomCharacters";
import assert = require("assert");

describe('RandomCharacters', () => {
    it("should return string of length 10", () => {
        const randomCharactersCreator = new RandomCharacters({ length: 10 });
        const randomCharacters = randomCharactersCreator.create();
        assert.equal(randomCharacters == null ? -1 : randomCharacters.length, 10);
    })
})