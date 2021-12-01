export const fizzbuzz = (num) => {
  const numberArray = [];

  for (let i = 1; i < 101; i++) {
    numberArray.push(works(i));
  }
  return numberArray;

  function works(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0 || num.toString().indexOf("3") > -1) {
      return "Fizz";
    } else if (num % 5 === 0 || num.toString().indexOf("5") > -1) {
      return "Buzz";
    } else return num;
  }
};
