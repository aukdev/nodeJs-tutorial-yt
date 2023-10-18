import { log } from "node:console";
import { EventEmitter } from "node:events";

class AUKEmitter extends EventEmitter {
  constructor(city, age) {
    super();
    this.city = city;
    this.age = age;
  }

  runOnClick() {
    this.emit("onClick", 12, this.city);
  }
}

const emiterObj = new AUKEmitter("tangalle", 26);

emiterObj.runOnClick();

emiterObj.on("onClick", (name, city) => {
  log("onClick event 2", `your name is : ${name} ${city}`);
});

const myFunction = async (name) => {
  log("onClick event", name);
};

emiterObj.addListener("onClick2", myFunction);

emiterObj.emit("onClick2", "amila");
emiterObj.emit("onClick2", "upul");
emiterObj.removeListener("onClick2", myFunction);
emiterObj.emit("onClick2");
emiterObj.emit("onClick2");
// emiterObj.emit("onClick", 12, { name: "kamal" });
// emiterObj.emit("onClick", 12, { name: "kamal" });
