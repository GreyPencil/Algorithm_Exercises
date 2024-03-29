/* 
Write a function that takes in a string of words separated by one or more
whitespaces and returns a string that has these words in reverse order.
For example, given the string "tim is great", your function should
return "great is tim"

For this problem, a word can contain special characters, punctuation,
and numbers. The words in the string will be separated by one or more 
whitespaces, and the reversed string must contain the same whitespaces
as the original string. For example, given the string 
"whitespaces   4" you would be expected to return"4    whitespaces

Note that you're not allowed to use any built-in split or reverse
methods/functions. However, you are allowed to use a built-in join method/function.

Also note that the input string isn't guaranteed to alwasys contain words.

Sample Input:
string = "AlgoExpert is the best!"

Sample Output:
"best! the is AlgoExpert"
*/

function reverseWordsInString(string) {
  // Write your code here.
  //O(n) time /space
  const characters = []
  for (const char of string) {
    characters.push(char);
  }
  reverseListRange(characters, 0, characters.length - 1)

  let startOfWord = 0;
  while (startOfWord < characters.length) {
    let endOfWord = startOfWord;
    while (endOfWord < characters.length && characters[endOfWord] != ' ') {
      endOfWord++
    }
    reverseListRange(characters, startOfWord, endOfWord -1)
    startOfWord = endOfWord +1
  }
  return characters.join("");
}

const reverseListRange = (list, start, end) => {
  while (start < end)
{
  const temp = list[start]
  list[start] = list[end]
  list[end] = temp;
  start++
  end--
}
}

// Do not edit the line below.
exports.reverseWordsInString = reverseWordsInString;