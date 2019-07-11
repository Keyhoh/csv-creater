module.exports.sequencer = (from = 1, step = 1) => {
    const seq = () => {
        seq.counter += step;
        return seq.counter;
    }
    seq.counter = from - step;
    return seq;
}