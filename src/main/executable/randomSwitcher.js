const randomSwitcher = (executable1 = () => null, executable2 = () => null, rate = 0.5) => {
    return () => Math.random() < rate ? executable1() : executable2();
}