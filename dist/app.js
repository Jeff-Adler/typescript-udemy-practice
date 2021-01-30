"use strict";
var _a;
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
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = "";
const storedData = userInput || "Default";
const storedData2 = userInput !== null && userInput !== void 0 ? userInput : "Default";
console.log(storedData);
console.log(storedData2);
//# sourceMappingURL=app.js.map