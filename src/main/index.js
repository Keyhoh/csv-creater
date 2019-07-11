const createLineFromExecutables = (executables = [() => ''], separater = ',') => {
    return executables.map(executable => executable()).join(separater);
}

const { sequencer } = require('./executable/sequencer');

const defaultSeq = sequencer();
const oddSeq = sequencer(1, 2);
const evenSeq = sequencer(0, 2);

for (let i = 0; i < 10; i++) {
    console.log(createLineFromExecutables([defaultSeq, oddSeq, evenSeq]));
}