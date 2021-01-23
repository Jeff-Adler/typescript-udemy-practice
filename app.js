var combine = function (input1, input2, resultConversion) {
    if (resultConversion === "as-number" && (isNaN(+input1) || isNaN(+input2))) {
        console.log("hit RETURN condition");
        return;
    }
    var result;
    if ((typeof input1 === "number" &&
        typeof input2 === "number" &&
        resultConversion !== "as-text") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combinedAges = combine(30, 26, "as-text");
console.log(combinedAges);
var combinedNames = combine("emily", "sarah", "as-number");
console.log(combinedNames);
var combinedNums = combine("5", "3", "as-number");
console.log(combinedNums);
