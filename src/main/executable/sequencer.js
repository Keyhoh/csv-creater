module.exports.sequencer = (from = 1, step = 1) => {

    from = isNaN(from = Number(from)) ? 1 : from;
    step = isNaN(step = Number(step)) ? 1 : step;

    const seq = () => {
        seq.counter += step;
        return seq.counter;
    }
    seq.counter = from - step;
    return seq;
}