"use strict";
const add = (a, b) => {
    return a + b;
};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const user1 = new Person("Jeff", 30);
user1.greet("Hi there");
//# sourceMappingURL=app.js.map