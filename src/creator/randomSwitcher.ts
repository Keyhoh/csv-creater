const randomSwitcher = (executable1: Function, executable2: Function, rate = 0.5) => {
    return () => randomSwitcher.create() < rate ? executable1() : executable2();
}

randomSwitcher.create = () => Math.random();

export { randomSwitcher };