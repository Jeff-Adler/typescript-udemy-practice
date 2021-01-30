"use strict";
console.log("running2");
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
const add = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
const printEmployeeInformation = (emp) => {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
};
const ue1 = {
    name: "Jeff",
    privileges: ["setup-admin"],
    startDate: new Date(),
};
printEmployeeInformation(ue1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(v1);
useVehicle(v2);
const moveAnimal = (animal) => {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
};
const a1 = {
    type: "bird",
    flyingSpeed: 30,
};
const a2 = {
    type: "horse",
    runningSpeed: 50,
};
moveAnimal(a1);
moveAnimal(a2);
//# sourceMappingURL=app.js.map