import RandomStringCreator from "./RandomStringCreator";

export default class RandomCharacters extends RandomStringCreator {

    private readonly length: number;

    constructor({ length }: { length: number }, random: () => number = Math.random) {
        super(random);
        this.length = length;
    }

    create(): string | null {
        if (this.length < 0) {
            return null;
        } else {
            return [...new Array(this.length).fill('')].map(_ => (this.random() * 36 | 0).toString(36)).join('');
        }
    }
}