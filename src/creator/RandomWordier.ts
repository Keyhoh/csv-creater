import RandomStringCreator from "./RandomStringCreator";

export default class RandomWordier extends RandomStringCreator {

    private readonly words: string[];

    constructor({ words }: { words: string[] }, random: () => number = Math.random) {
        super(random);
        this.words = words;
    }
    create(): string | null {
        return this.words[Math.floor(this.random() * this.words.length)];
    }
}