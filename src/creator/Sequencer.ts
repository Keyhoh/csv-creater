import StringCreator from './StringCreator';

export default class Sequencer implements StringCreator {

    private counter: number = 0;

    private readonly from: number = 1;
    private readonly step: number = 1;

    constructor({ from, step }: { from: number, step: number }) {
        this.from = isNaN(from) ? 1 : from;
        this.step = isNaN(step) ? 1 : step;
    }

    create(): string {
        return String(this.from + this.step * this.counter++);
    }
}