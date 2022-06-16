import Controller from "./Controller.js";
import Model from "./Model.js";
import View from "./View.js";
function main() {
    const model = new Model(7);
    const controller = new Controller(model);
    const view = new View(model, controller);
    model.registerObserver(view);
    const app = document.getElementById("app");
    if (app instanceof Element) {
        app.appendChild(view.ctrlDisplay);
        app.appendChild(view.numDisplay);
    }
}
main();
