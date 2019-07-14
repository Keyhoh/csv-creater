import StringCreator from "./executable/StringCreator";
const createLineFromStringCreator = (stringCreators: Array<StringCreator>, separator = ',') => {
    return stringCreators.map(executable => executable.create()).join(separator);
}

import Sequencer from "./executable/sequencer";

const defaultSeq = new Sequencer();
const reverseSeq = new Sequencer(-1, -1);

for (let i = 0; i < 10; i++) {
    console.log(createLineFromStringCreator([defaultSeq, reverseSeq]));
}