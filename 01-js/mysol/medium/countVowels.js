/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str = " Pravin") {
  let count = 0;
  const vowels = ['a', 'o', 'e', 'i', 'u', 'A', 'O', 'U', 'E', 'I'];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(countVowels()); // Output: 2 (for the default input " Pravin")

module.exports = countVowels;
