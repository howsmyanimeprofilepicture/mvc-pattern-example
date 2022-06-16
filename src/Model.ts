import ModelInterface from "./ModelInterface.js";
import Observer from "./Observer.js";

export default class Model implements ModelInterface {
    private observers: Observer[] = [];
    private number: number;

    constructor(initNumber: number) {
        this.number = initNumber;
    }

    public setNumber(num: number): void {
        console.log(`updated ${num}`)
        this.number = num;
    }

    public getNumber(): number {
        return this.number;
    }

    public registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    public removeObserver(o: Observer): void {
        const idx: number = this.observers.indexOf(o);
        if (idx === -1) return;
        this.observers.splice(idx, 1);
    }

    public notifyObservers(): void {
        this.observers.forEach((o) => {
            o.update();
        });
    }
}
