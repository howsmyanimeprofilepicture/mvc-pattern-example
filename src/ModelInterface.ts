import Observer from "./Observer.js";

export default interface ModelInterface {
    setNumber(num: number): void;
    getNumber(): number;
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
}