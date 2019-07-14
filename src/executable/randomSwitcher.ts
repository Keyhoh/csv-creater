const randomSwitcher = (executable1 = () => null, executable2 = () => null, rate = 0.5) => {
    return () => randomSwitcher.create() < rate ? executable1() : executable2();
}

randomSwitcher.create = () => Math.random();

module.exports.randomSwitcher = randomSwitcher;