"use strict";
const names = ["Jeff", "Manuel"];
const merge = (objA, objB) => {
    return Object.assign(objA, objB);
};
const mergedObj = merge({ name: "Jeff" }, { age: 30 });
const mergedObj2 = merge({ id: 1 }, { age: 30 });
const mergedObj3 = merge({ name: "Jeff" }, { vegetarian: false });
console.log(mergedObj);
console.log(mergedObj2);
console.log(mergedObj3);
//# sourceMappingURL=app.js.map