class SwitchButton {
    constructor() {
        this.status = false;
        this.connecttolamp = false;
    }

    connectToLamp() {
        this.connecttolamp = true;
    }

    switchOff(electric) {
        if (this.connecttolamp === true && this.status === true) {
            electric.turnOff();
            console.log("cong tac tat");
            this.status = false;
        } else {
            console.log("chua ket noi den,hoac den dang tat")
        }

    }

    switchOn(electric) {
        if (this.connecttolamp === true && this.status === false) {
            electric.turnOn();
            console.log(" cong tac bat");
            this.status = true;
        } else {
            console.log("chua ket noi den,hoac den dang tat")
        }

    }

}

