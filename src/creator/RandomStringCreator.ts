import StringCreator from "./StringCreator";

export default abstract class RandomStringCreator implements StringCreator {
    protected readonly random: () => number;

    constructor(random: () => number = Math.random) {
        this.random = random;
    }

    abstract create(): string | null;
}