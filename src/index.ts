const createLineFromExecutables = (executables = [() => null], separator = ',') => {
    return executables.map(executable => executable()).join(separator);
}

const { sequencer } = require('./executable/sequencer');
const { randomer } = require('./executable/randomer');
const { randomSwitcher } = require('./executable/randomSwitcher');

const defaultSeq = sequencer();
const reverseSeq = sequencer(-1, -1);
const defaultRandomSwitcher = randomSwitcher(defaultSeq, reverseSeq);

const dateFns = require('date-fns');

const defaultRandomer = randomer();

const today = Date.now();
const addRandomDay = () => dateFns.addDays(today, defaultRandomer()).getDate();

for (let i = 0; i < 10; i++) {
    console.log(createLineFromExecutables([defaultRandomSwitcher, addRandomDay]));
}