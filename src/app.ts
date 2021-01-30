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
