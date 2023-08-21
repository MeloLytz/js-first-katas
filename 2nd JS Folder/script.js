function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

console.log(welcomeMsg("Marcelo"));
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

function calcGrossPrice(netPrice, tax) {
  return netPrice + netPrice * tax;
}

console.log(calcGrossPrice(576.49, 0.19));

console.log(calcGrossPrice(20, 0.19));

function addPositive(number1, number2) {
    return number1 + number2;
}

/*
console.log(addPositive(-15, -24));

// TODO: implement welcomeMsg function

console.log(welcomeMsg("Jane"));
// Welcome Jane!

console.log(welcomeMsg("Marc"));
// Welcome Marc!

// TODO: implement calcGrossPrice function

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4
*/
