/* the first non-reapeating character is the first character in a string that occurs only once, return the index of character
if the input string doesn't have any, return -1 */

// O(n^2)   O(1)
function firstNonRepeatingCharacter(string) {
    // Write your code here.
    
    for (let i =0; i< string.length; i++){
        let flag = false;
        for (let j = 0; j < string.length; j++){
            if(string[i] === string[j] && i !==j){
                flag = true;
            }
            if(!flag) return i;
        }
    }

    return -1;
  }

// O(n)   O(1) space
  function firstNonRepeatingCharacter2(string) {
      const characterFrequency = {};
      for (const char of string){
          if(!(char in characterFrequency)) characterFrequency[char] = 0;
          characterFrequency[char]++;
      }
      for (let i = 0; i < string.length; i++){
          const char = string[i];
          if(characterFrequency[char] === 1) return i;
      }
      return -1;

  }