/* 
You're given an array of integers and another array of three distinct integers. The first array is guaranteed
to only contain integers that are in the second array, and the second array represents a desired order for
the integers in the first array. for example, a second array of [x,y,z] represents a desired order of [x,x,...,x,y,y,xxx,yxz,z,...z] in the first array.

Write a function that sorts the first array according to the desired order in the second array.
the function should perform this in place(i.e., it should mutate the input array), and it shouldn't use any 
auxiliary space (i.e., it should run with constant space: O(1) space)

Note that the desired order won't necessarily be ascending or descending and that the first array won't necessarily contain all three integer found in the second array
it might only contain one or two.

Sample input:
array = [1,0,0,-1,-1,0,1,1]
order = [0,1,-1]

Sample output:
[0,0,0,1,1,1,-1,-1]
*/

function threeNumberSort(array, order) {
    // O(n) time O(1) space
    const firstValue = order[0]
    const secondValue = order[1]

    let firstIdx = 0;
    let secondIdx =0;
    let thirdIdx = array.length-1;

    while (secondIdx <= thirdIdx) {
        const value = array[secondIdx]

        if (value === firstValue){
            swap(firstIdx, secondIdx, array)
            firstIdx++
            secondIdx++
        } else if (value === secondValue) {
            secondIdx++
        } else {
            swap(secondIdx, thirdIdx, array)
            thirdIdx -= 1
        }
    }
    return array;
  }

  function swap(i, j ,array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  // Do not edit the line below.
  exports.threeNumberSort = threeNumberSort;
  