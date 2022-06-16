export default class Controller {
    constructor(model) {
        this.model = model;
    }
    increase() {
        this.model.setNumber(this.model.getNumber() + 1);
        this.model.notifyObservers();
    }
    decrease() {
        this.model.setNumber(this.model.getNumber() - 1);
        this.model.notifyObservers();
    }
}
