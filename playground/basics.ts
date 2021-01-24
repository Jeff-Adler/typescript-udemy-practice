// showResult defaults to false. If however, showResult is set to true, but not showPhrase is given, default is ""
const add = (
  n1: number,
  n2: number,
  showResult: boolean = false,
  showPhrase: string = ""
) => {
  if (showResult) {
    console.log(showPhrase, n1 + n2);
  } else {
    return n1 + n2;
  }
};

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = `Result is: `;

add(number1, number2, printResult, resultPhrase);
