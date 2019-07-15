import StringCreator from "./StringCreator";
export default abstract class MixStringCreator implements StringCreator {
    private firstCreator: StringCreator;
    private secondCreator: StringCreator;
    constructor({ firstCreator, secondCreator }: { firstCreator: StringCreator, secondCreator: StringCreator }) {
        this.firstCreator = firstCreator;
        this.secondCreator = secondCreator;
    }

    protected abstract useFirst(): boolean;

    create(): string | null {
        return this.useFirst() ? this.firstCreator.create() : this.secondCreator.create();
    }
}