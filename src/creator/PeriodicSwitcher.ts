import StringCreator from "./StringCreator";
import MixStringCreator from "./MixStringCreator";

export default class PeriodicSwitcher extends MixStringCreator {

    private readonly firstPeriod: number;
    private readonly secondPeriod: number;

    private firstCounter: number = 0;
    private secondCounter: number = 0;

    constructor(
        { firstCreator, secondCreator }: { firstCreator: StringCreator, secondCreator: StringCreator },
        { firstPeriod, secondPeriod }: { firstPeriod: number, secondPeriod: number },
    ) {
        super({ firstCreator, secondCreator });
        this.firstPeriod = firstPeriod;
        this.secondPeriod = secondPeriod;
    }

    useFirst(): boolean {
        return this.firstCounter > 0;
    }

    private count() {
        if (this.firstCounter < this.firstPeriod) {
            this.firstCounter++;
            this.secondCounter = 0;
        } else if (this.secondCounter < this.secondPeriod) {
            this.secondCounter++;
            this.firstCounter = 0;
        }
    }
}