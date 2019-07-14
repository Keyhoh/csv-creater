import Executable from './Executable';

export default class Sequencer implements Executable {

    private counter: number = 0;

    private readonly from: number = 1;
    private readonly step: number = 1;

    constructor(from: number = 1, step: number = 1) {
        this.from = isNaN(from = Number(from)) ? 1 : from;
        this.step = isNaN(step = Number(step)) ? 1 : step;
    }

    execute(): string {
        return String(this.from + this.step * this.counter++);
    }
}