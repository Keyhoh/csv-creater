import RandomStringCreator from "./RandomStringCreator";

export default class RandomInteger extends RandomStringCreator {

  private readonly from: number;
  private readonly len: number;
  private readonly fix: (x: number) => number;

  constructor(
    { from, len }: { from: number, len: number },
    random: () => number = Math.random
  ) {
    super(random);
    this.from = from;
    this.len = len;
    this.fix = len >= 0 ? Math.floor : Math.ceil;
  }

  create(): string | null {
    return String(this.fix(this.random() * this.len) + this.from);
  }
}
