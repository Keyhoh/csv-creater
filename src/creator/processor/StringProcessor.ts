import StringCreator from "../StringCreator";

export default class StringProcessor implements StringCreator {

    private readonly stringCreator: StringCreator;
    private readonly processor: (str: string) => string;

    constructor({ stringCreator, processor }: { stringCreator: StringCreator, processor: (str: string) => string }) {
        this.stringCreator = stringCreator;
        this.processor = processor;
    }

    create(): string | null {
        const value = this.stringCreator.create();
        return value == null ? null : this.processor(value);
    }
}