const createLineFromExecutables = (executables: Array<Function>, separator = ',') => {
    return executables.map(executable => executable()).join(separator);
}

import { sequencer } from "./executable/sequencer";
import { randomer } from "./executable/randomer";
import { randomSwitcher } from "./executable/randomSwitcher";

const defaultSeq = sequencer();
const reverseSeq = sequencer(-1, -1);
const defaultRandomSwitcher = randomSwitcher(defaultSeq, reverseSeq);

import * as dateFns from "date-fns";

const defaultRandomer = randomer();

const now = Date.now();
const dateRandomer = () => dateFns.addDays(now, defaultRandomer()).getDate();

for (let i = 0; i < 10; i++) {
    console.log(createLineFromExecutables([defaultRandomSwitcher, dateRandomer]));
}