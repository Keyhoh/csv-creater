import StringCreator from "./StringCreator";

export default abstract class RandomStringCreator implements StringCreator {
    protected readonly random: () => number;

    constructor(random: () => number) {
        this.random = random;
    }

    abstract create(): string | null;
}