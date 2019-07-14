module.exports.sequencer = (from = 1, step = 1) => {

    from = isNaN(from = Number(from)) ? 1 : from;
    step = isNaN(step = Number(step)) ? 1 : step;

    const seq = () => from + step * seq.counter++;

    seq.counter = 0;
    return seq;
}