/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1 = "spar", str2 = "rasp") {
  
let str11 = str1.toLowerCase().split("").sort().join("");
  
let str12 = str2.toLowerCase().split("").sort().join("");

 return str11 === str12;


}
console.log(" anagram?", isAnagram());

module.exports = isAnagram;
