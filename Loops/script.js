// TODO: Implement the oddNumbers function

function oddNumbers(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

console.log("-----------------------------------------------------------");

function charCount(word, letter) {
  if (letter.length !== 1) {
    return "Include only 1 'letter'!";
  }

  let char = 0;

  for (let i = 0; i < word.length; i++) {
    const currentLetter = word[i];

    if (currentLetter.toLowerCase() === letter.toLowerCase()) {
      char++;
    }
  }
  return char;
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
