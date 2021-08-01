/* Three Number Sum
Write a function that takes in a non-empty array of distinct integers and an integer representing
a target sum. The function should find all triplets in the array that sum up
to the target sum and return a two-dimensional array of all these triplets. 
The numbers in each triplet should be ordered in ascending order, and the triplets
themselves should be ordered in ascending order with respect to the numbers
they hold
if no three numbers sum up to the target sum, the function should return an empty array.
*/
/* The first step in the solution is to sort the input array. 
Why is the O(nlog(n)) runtime of the sorting step not reflected in the overall time complexity of the algorithm?

The nested loops in the solution run in O(n^2) time; this dwarfs the O(nlog(n)) runtime of the sorting step and allows us to remove it from the final time complexity of the algorithm. */

function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a,b) => a -b);
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++){
        let left = i+1;
        let right = array.length-1;
        while (left < right){
            let currentSum = array[i]+array[left]+array[right];
            if (currentSum < targetSum){
                left ++;
            }else if (currentSum > targetSum){
                right --;
            }else if (currentSum === targetSum) {
                triplets.push([array[i],array[left],array[right]]);
                left ++;
                right --;
            }
        }
    }
    return triplets;
  }
  
  // Do not edit the line below.
  exports.threeNumberSum = threeNumberSum;