import StringCreator from "./creator/StringCreator";
const createLineFromStringCreator = (stringCreators: Array<StringCreator>, separator = ',') => {
    return stringCreators.map(executable => executable.create()).join(separator);
}

import Sequencer from "./creator/sequencer";

const defaultSeq = new Sequencer({ from: 1, step: 1 });
const reverseSeq = new Sequencer({ from: -1, step: -1 });

for (let i = 0; i < 10; i++) {
    console.log(createLineFromStringCreator([defaultSeq, reverseSeq]));
}