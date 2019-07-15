import StringCreator from "./StringCreator";
import MixStringCreator from "./MixStringCreator";

export default class RandomSwitcher extends MixStringCreator {
    private readonly rate: number;
    private readonly random: () => number;

    constructor({ firstCreator, secondCreator, rate }: { firstCreator: StringCreator, secondCreator: StringCreator, rate: number }, random: () => number = Math.random) {
        super({ firstCreator: firstCreator, secondCreator: secondCreator });
        this.rate = rate;
        this.random = random;
    }

    protected useFirst() {
        return this.random() < this.rate;
    }
}