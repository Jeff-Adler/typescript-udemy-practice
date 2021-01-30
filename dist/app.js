"use strict";
console.log("running");
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Jeff", "Adler");
result.split(" ");
//# sourceMappingURL=app.js.map