"use strict";
const add = (a, b) => {
    return a + b;
};
class Person {
    constructor(name, age, surname) {
        this.name = name;
        this.age = age;
        this.surname = surname;
    }
    greet(phrase) {
        const surname = this.surname ? this.surname : "";
        console.log(`${phrase} ${this.name} ${surname}`);
    }
}
const user1 = new Person("Jeff", 30);
user1.greet("Hi there");
const user2 = new Person("John", 30, "Pramp");
user2.greet("Hello");
//# sourceMappingURL=app.js.map