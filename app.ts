const add = (n1: number, n2: number) => {
  return n1 + n2;
};

// return type is void even though it will get typeof 'undefined' once compiled into JS
const printResult = (num: number) => {
  console.log("Result: " + num);
};

console.log(typeof printResult(4));
