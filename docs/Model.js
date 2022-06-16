export default class Model {
    constructor(initNumber) {
        this.observers = [];
        this.number = initNumber;
    }
    setNumber(num) {
        console.log(`updated ${num}`);
        this.number = num;
    }
    getNumber() {
        return this.number;
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        const idx = this.observers.indexOf(o);
        if (idx === -1)
            return;
        this.observers.splice(idx, 1);
    }
    notifyObservers() {
        this.observers.forEach((o) => {
            o.update();
        });
    }
}
