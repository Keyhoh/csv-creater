const randomer = (from = 0, to = 1) => {
    const reverse = from >= to;
    const len = to - from + (reverse ? -1 : 1);
    const fixer = reverse ? Math.ceil : Math.floor;
    return () => {
        return fixer(randomer.create() * len) + from;
    }
}

randomer.create = () => Math.random();

module.exports.randomer = randomer;