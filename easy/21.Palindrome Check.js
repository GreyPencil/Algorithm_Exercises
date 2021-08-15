/* 
Write a function that takes in a non-empty string and returns a boolean representing whether the string is a palindrome.
A palindrome is defined as a string that's writeen the same forward and backward. Note that single-character strings are palindromes.
回形数
sample input string = 'abcdcba
sample output : true
*/
// O(n) time   o(1) space

function isPalindrome(string) {
    // Write your code here.
    let newString = '';
    for (let i = string.length-1; i>=0; i--){
        newString += string[i];
    }
    return string === newString;
  }
  