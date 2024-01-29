/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
// let  s =0, n,r,c;

// c = str.length;
// while(n>0){
//   r = n%10;
//   s = (s * 10)+ r;
//   n=  n/10;

//   if( str[r] == str[c] ){
//       System.out.println(" it is palindrom bitch");
//   }
//   else {
//       System.out.println(" it is not");
//   }

// }





//   return true;
// }

// module.exports = isPalindrome;

function isPalindrome(str = " Nan") {
  let s = 0, n, r, c;

  n = str.length;
  c = n - 1;

  while (n > 0) {
    r = n % 10;
    s = (s * 10) + r;
    n = Math.floor(n / 10);

    if (str[r] === str[c]) {
      console.log("It is a palindrome");
    } else {
      console.log("It is not a palindrome");
      return false;
    }

    c--;
  }

  return true;
}

console.log(isPalindrome("madam")); // Example usage

module.exports = isPalindrome;
