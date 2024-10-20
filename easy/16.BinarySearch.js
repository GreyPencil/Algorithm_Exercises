/* given: sorted array of integers, and a target integer.
use binary search algorithm, return the index of the target integer, otherwise -1


O(logn) time and O(1) space
*/

function binarySearch(array, target) {
    return helper(array, target, 0, array.length-1);
 
 }
 
 function helper(array, target, left, right){
     while (left <= right ){
        //  const mid = Math.floor((left+right)/2);
         const mid = left + ((right - left) >> 1); // avoid over flow

             const potential = array[mid];
         if(target === potential){
             return mid;
         }else if (target > potential){
             left = mid + 1;
         }else if (target < potential){
             right = mid - 1;
            //  必须一个减一，一个加一，不然无限循环
         }
     }
     return -1;
 }
 
 // Do not edit the line below.
 exports.binarySearch = binarySearch;
 

let ss = 0;
    let ee =5;
    let mm = Math.ceil((ss+ee)/2);
    console.log(mm);