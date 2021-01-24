"use strict";
var add = function (n1, n2) {
    return n1 + n2;
};
// return type is void even though it will get typeof 'undefined' once compiled into JS
var printResult = function (num) {
    console.log("Result: " + num);
};
console.log(typeof printResult(4));
//sets variables to type of function that takes two args of type number and returns type number
var combineValues;
combineValues = add;
//declaring an argument of type function that takes a number and returns void
var addAndHandler = function (n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
};
addAndHandler(5, 4, function (num) {
    console.log(num);
    // specifying void as return type, TS allows you to return ANY type, or not return anything. This is because callbacks should have that flexibility.
    return num;
});
