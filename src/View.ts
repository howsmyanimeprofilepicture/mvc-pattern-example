import ControllerInterface from "./ControllerInterface.js";
import ModelInterface from "./ModelInterface.js";
import Observer from "./Observer.js";
import WebElementFactory from "./WebElementFactory.js";

export default class View implements Observer, WebElementFactory {
    private model: ModelInterface;
    private controller: ControllerInterface;
    public numDisplay: HTMLDivElement;
    public ctrlDisplay: HTMLDivElement;

    constructor(model: ModelInterface, controller: ControllerInterface) {
        this.model = model;
        this.controller = controller;
        this.numDisplay = this.createView();
        this.ctrlDisplay = this.createControlInterface();
    }

    public createView(): HTMLDivElement {
        const numDisplay: HTMLDivElement = document.createElement("div");
        numDisplay.className = "view";
        numDisplay.innerHTML = this.model.getNumber().toString();

        return numDisplay;
    }

    public createControlInterface(): HTMLDivElement {
        const ctrlDisplay: HTMLDivElement = document.createElement("div");
        ctrlDisplay.className = "ctrl";
        const upBtn: HTMLButtonElement = document.createElement("button");
        upBtn.className = "upBtn";
        upBtn.innerHTML = "+"
        upBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.controller.increase();
        })

        const downBtn: HTMLButtonElement = document.createElement("button");
        downBtn.className = "downBtn";
        downBtn.innerHTML = "-";
        downBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.controller.decrease();
        })

        ctrlDisplay.appendChild(upBtn);
        ctrlDisplay.appendChild(downBtn);

        return ctrlDisplay;
    }

    public update(): void {

        this.numDisplay.innerHTML = this.model.getNumber().toString();
    }
}