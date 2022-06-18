import ControllerInterface from "./ControllerInterface.js";
import ModelInterface from "./ModelInterface.js";
import Observable from "./Observable.js";

export default class Controller implements ControllerInterface {
    private model: ModelInterface & Observable;

    constructor(model: ModelInterface & Observable) {
        this.model = model;
    }

    public increase(): void {
        this.model.setNumber(this.model.getNumber() + 1);
        this.model.notifyObservers();
    }

    public decrease(): void {
        this.model.setNumber(this.model.getNumber() - 1);
        this.model.notifyObservers();
    }
}