import StringCreator from "../StringCreator";
import MixStringCreator from "./MixStringCreator";

export default class PeriodicSwitcher extends MixStringCreator {

    private readonly firstPeriod: number;
    private readonly totalPeriod: number;

    private counter: number = 0;

    constructor(
        { firstCreator, secondCreator }: { firstCreator: StringCreator, secondCreator: StringCreator },
        { firstPeriod, totalPeriod: totalPeriod }: { firstPeriod: number, totalPeriod: number },
    ) {
        super({ firstCreator, secondCreator });
        this.firstPeriod = firstPeriod;
        this.totalPeriod = totalPeriod;
    }

    useFirst(): boolean {
        this.count();
        return this.counter <= this.firstPeriod;
    }

    private count(): void {
        if (this.counter >= this.totalPeriod) this.counter = 0;
        this.counter++;
    }
}