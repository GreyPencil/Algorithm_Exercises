/* 
Write a function that takes in a string made up of brackets and other optional characters. The function should return a boolean representing whether the string is balanced with regards to brackets.
A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that
type and if no bracket is unmatched. Note that an opening bracket can't match a corresponding
closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it. Also, brackets can't overlap each other as in [(])

Sample Input:
string = "([])(){}(())()()"

Sample Ouput:
true
*/

function balancedBrackets(string) {
    // O(n) time  |O(n) space

    const openingbrackets = '([{'
    const closingBrakets = ')]}'
    const matchingBrackets = {')':'(', ']':'[','}':'{'}
    const stack = []

    for (const char of string) {
        if (openingbrackets.includes(char)){
            stack.push(char)
            console.log("stack.push(char):", stack);
        }else if (closingBrakets.includes(char)){
            if (stack.length ==0){
                console.log("stack.length:", stack.length);
                return false
            }
            if (stack[stack.length-1]===matchingBrackets[char]){
                stack.pop()
                console.log("stack.pop:", stack);
            } else {
                return false;
            }
        }
    }
    return stack.length ===0;

  }
  
//  let result = balancedBrackets();
//  console.log(result)
 let stringb = "([])(){}(())()()";
 let result2 = balancedBrackets(stringb)
 console.log(result2)