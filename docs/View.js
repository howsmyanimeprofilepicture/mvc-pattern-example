export default class View {
    constructor(model, controller) {
        this.model = model;
        this.controller = controller;
        this.numDisplay = this.createView();
        this.ctrlDisplay = this.createControlInterface();
    }
    createView() {
        const numDisplay = document.createElement("div");
        numDisplay.className = "view";
        numDisplay.innerHTML = this.model.getNumber().toString();
        return numDisplay;
    }
    createControlInterface() {
        const ctrlDisplay = document.createElement("div");
        ctrlDisplay.className = "ctrl";
        const upBtn = document.createElement("button");
        upBtn.className = "upBtn";
        upBtn.innerHTML = "+";
        upBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.controller.increase();
        });
        const downBtn = document.createElement("button");
        downBtn.className = "downBtn";
        downBtn.innerHTML = "-";
        downBtn.addEventListener("click", (e) => {
            e.preventDefault();
            this.controller.decrease();
        });
        ctrlDisplay.appendChild(upBtn);
        ctrlDisplay.appendChild(downBtn);
        return ctrlDisplay;
    }
    update() {
        this.numDisplay.innerHTML = this.model.getNumber().toString();
    }
}
