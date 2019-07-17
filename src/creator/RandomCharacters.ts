import RandomStringCreator from "./RandomStringCreator";

export default class RandomCharacters extends RandomStringCreator {

    private readonly length: number;

    constructor({ length }: { length: number }, random: () => number) {
        super(random);
        this.length = length;
    }

    create(): string | null {
        if (this.length < 0) {
            return null;
        } else {
            return [...Array(this.length)].map(_ => (this.random() * 36 | 0).toString(36)).join('');
        }
    }
}