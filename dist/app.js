"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return (constructor) => {
        console.log(logString);
        console.log(constructor);
    };
}
const WithTemplate = (template, hookId) => {
    return (constructor) => {
        console.log("Rendering template");
        const hookEle = document.getElementById(hookId);
        const p = new constructor();
        if (hookEle) {
            hookEle.innerHTML = template;
            hookEle.querySelector("h1").textContent = p.name;
        }
    };
};
let Person = class Person {
    constructor() {
        this.name = "Jeff";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("LOGGING - PERSON"),
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
const person1 = new Person();
const person2 = new Person();
function Log(target, propertyName) {
    console.log("Property Decorator");
    console.log(target, propertyName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    set setPrice(val) {
        if (val > 0) {
            this.price = val;
        }
        else {
            console.log("Value must be greater than 0.");
        }
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
//# sourceMappingURL=app.js.map