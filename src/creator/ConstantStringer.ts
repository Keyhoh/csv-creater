import StringCreator from "./StringCreator";

export default class ConstantStringer implements StringCreator {
    private readonly value: string | null;
    constructor({ value }: { value: string | number | null } = { value: null }) {
        this.value = value == null ? null : String(value);
    }

    create(): string | null {
        return this.value;
    }
}