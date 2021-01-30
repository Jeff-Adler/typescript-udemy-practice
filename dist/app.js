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
const countAndPrintLength = (element) => {
    let descriptionText = "Got no value.";
    if (element.length > 0)
        descriptionText = `Got ${element.length} elements.`;
    return [element, descriptionText];
};
console.log(countAndPrintLength("A string is lengthy"));
console.log(countAndPrintLength(["An arary is also lengthy"]));
const extractAndConvert = (obj, key) => {
    return "Value: " + obj[key];
};
class DataStorage {
    constructor() {
        this.data = Array();
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Jeff");
textStorage.addItem("Steve");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(5);
//# sourceMappingURL=app.js.map