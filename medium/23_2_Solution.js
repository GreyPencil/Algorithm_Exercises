/* 
Write a function that takes in two strings and returns the minimum number of edit operations that need to
be performed on the first string to obtain the second string.
There are three edit operations: insertion of a character, deletion of a character, and substitution of a character for another.

Sample Input: str1 = "abc", str2 = "yabd"
Sample Output: 2 //insert "y"; substitute "c" for "d"
 */

function levenshteinDistance(str1, str2) {
    // Write your code here.
    // Time = O(NM)  Space = (min(n,m))
   const small = str1.length < str2.length ? str1: str2;
   const big = str1.length >= str2.length ? str1: str2;
   const evenEdits = [];
   const oddEdits = new Array(small.length+1)
   for (let j =0; j< small.length +1; j++){
       evenEdits.push(j)

   }
   for (let i =1; i<big.length+1; i++){
       let currentEdits, previousEdits;
       if (i %2 ===1){
           currentEdits = oddEdits;
           previousEdits = evenEdits;
       } else {
           currentEdits = evenEdits;
           previousEdits = oddEdits;
       }
       currentEdits[0] =i;
       for(let j =1; j<small.length+1; j++){
           if(big[i-1] === small[j-1]){
               currentEdits[j] = previousEdits[j-1];
           }else {
               currentEdits[j] = 1 +Math.min(previousEdits[j-1], previousEdits[j], currentEdits[j-1])
           }
       }
   }
   return big.length%2 === 0? evenEdits[small.length]: oddEdits[small.length];
  }
  
  // Do not edit the line below.
  exports.levenshteinDistance = levenshteinDistance;