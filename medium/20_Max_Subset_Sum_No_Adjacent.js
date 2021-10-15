/* 
Write a function that takes in an array of positive integers and returns the maximum sum
of non-adjacent elements in the array.

非相邻元素最大值

If the input array is empty, return 0
*/

function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    // O(n) time | space
    if (!array.length) return 0;
    if(array.length === 1) return array[0];
    const maxSums = array.slice();
    maxSums[1] = Math.max(array[0], array[1]);
    for (let i =2; i< array.length; i++) {
        maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] +array[i]);
    }
    return maxSums[maxSums.length-1];
  }

  function maxSubsetSumNoAdjacent2(array) {
      // O(n) time | O(1) space
    if (!array.length) return 0;
    if(array.length === 1) return array[0];
    let second = array[0]
    let first = Math.max(array[0], array[1])
    for (let i =2 ; i < array.length; i++){
        const current = Math.max(first, second + array[i])
        second = first;
        first = current;
    }
    return first;
  }
  
  // Do not edit the line below.
  exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;