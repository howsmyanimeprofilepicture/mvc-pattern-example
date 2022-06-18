import Observer from "./Observer.js";

export default interface Observable {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
}