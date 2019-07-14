import Executable from "./executable/Executable";
const createLineFromExecutables = (executables: Array<Executable>, separator = ',') => {
    return executables.map(executable => executable.execute()).join(separator);
}

import Sequencer from "./executable/sequencer";

const defaultSeq = new Sequencer();
const reverseSeq = new Sequencer(-1, -1);

for (let i = 0; i < 10; i++) {
    console.log(createLineFromExecutables([defaultSeq, reverseSeq]));
}