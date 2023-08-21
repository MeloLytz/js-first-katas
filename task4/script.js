const size = 25;
let result;

if (20 > size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// TODO: Implement the oddEven function

const oddEven = function (number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

// return isEvenNumber ? "even" : "odd";

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

console.log("-----------------");

/*
The function has one parameter which is a number
 If the number is less than 16, return "children"
 If the number is less than 50, return "young person"
 Otherwise return "elder person"
 If the number is not a number or a negative number a string invalid parameter
 */

function oldYoung(age) {
  if (age < 0 || typeof age != "number") {
    return "Invalid parameter";
  } else if (age < 16) {
    return "Children";
  } else if (age < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}

// TODO: Implement the oldYoung function

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
console.log(oldYoung("Peter"));
