import Controller from "./Controller.js";
import ControllerInterface from "./ControllerInterface.js";
import Model from "./Model.js";
import ModelInterface from "./ModelInterface.js";
import Observable from "./Observable.js";
import View from "./View.js";

function main() {
    const model: ModelInterface & Observable = new Model(7);


    const controller: ControllerInterface = new Controller(model);
    const view: View = new View(model, controller);
    model.registerObserver(view);

    const app: Element | null = document.getElementById("app")
    if (app instanceof Element) {
        app.appendChild(view.ctrlDisplay);
        app.appendChild(view.numDisplay);
    }
}

main();