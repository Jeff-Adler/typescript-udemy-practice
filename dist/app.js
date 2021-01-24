"use strict";
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const user1 = new Person("Jeff");
user1.greet("Hi there");
//# sourceMappingURL=app.js.map