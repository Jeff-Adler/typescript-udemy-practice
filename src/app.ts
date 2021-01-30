const names: Array<string> = ["Jeff", "Manuel"];

// Promise, like Array, is a generic type. We can specify what specific type of generic with <>
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

//Generics T and U say that objA and objB might be different types, but
// merge() will return the intersection of the types of objA and objB.
//Optional extends keyword constraints the available types for T and U
const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

//TS infers the value of mergedObj & mergedObj2 through the generic above
const mergedObj = merge({ name: "Jeff" }, { age: 30 });
const mergedObj2 = merge({ id: 1 }, { age: 30 });
//Explicitly states the type: this is redundant though, and should be avoided
const mergedObj3 = merge<{ name: string }, { vegetarian: boolean }>(
  { name: "Jeff" },
  { vegetarian: false }
);
console.log(mergedObj);
console.log(mergedObj2);
console.log(mergedObj3);

// interface that says that whatever object will have a property length of type number
interface Lengthy {
  length: number;
}

const countAndPrintLength = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "Got no value.";
  if (element.length > 0) descriptionText = `Got ${element.length} elements.`;
  return [element, descriptionText];
};

console.log(countAndPrintLength("A string is lengthy"));
console.log(countAndPrintLength(["An arary is also lengthy"]));

//Specify that obj is guaranteed to have a property that key points to
//T will be any type of object,and U will be a property of that object
const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return "Value: " + obj[key];
};

//Generic class specificies that whatever type you declare an instance of DataStorage to,
//all methods will correspond to that type
class DataStorage<T extends string | number | boolean> {
  private data = Array<T>();

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Jeff");
textStorage.addItem("Steve");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(5);

//We won't be able to use removeItem if T = object, given the logic we've written
//Thus, we extend T to only accept string, number, or boolean
// const objStorage = new DataStorage<object>();
