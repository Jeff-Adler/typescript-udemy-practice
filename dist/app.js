"use strict";
let user1;
user1 = {
    name: "Jeff",
    age: 45,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
user1.greet("Hi there");
//# sourceMappingURL=app.js.map