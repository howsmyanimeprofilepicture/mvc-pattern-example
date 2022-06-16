import ControllerInterface from "./ControllerInterface.js";
import ModelInterface from "./ModelInterface.js";

export default class Controller implements ControllerInterface {
    private model: ModelInterface;

    constructor(model: ModelInterface) {
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