"use strict";
// showResult defaults to false. If however, showResult is set to true, but not showPhrase is given, default is ""
var add = function (n1, n2, showResult, showPhrase) {
    if (showResult === void 0) { showResult = false; }
    if (showPhrase === void 0) { showPhrase = ""; }
    if (showResult) {
        console.log(showPhrase, n1 + n2);
    }
    else {
        return n1 + n2;
    }
};
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
