type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  if (resultConversion === "as-number" && (isNaN(+input1) || isNaN(+input2))) {
    console.log("hit RETURN condition");
    return;
  }
  let result;
  if (
    (typeof input1 === "number" &&
      typeof input2 === "number" &&
      resultConversion !== "as-text") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(30, 26, "as-text");
console.log(combinedAges);

const combinedNames = combine("emily", "sarah", "as-number");
console.log(combinedNames);

const combinedNums = combine("5", "3", "as-number");
console.log(combinedNums);
