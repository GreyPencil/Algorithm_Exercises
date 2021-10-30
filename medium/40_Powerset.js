/* 
Write a function that takes in a narray of unique integers and returns its powerset.
The powerset P(X) of a setX is the set of all subsets of X. For example, the powerset of 
[1,2] is [[],[1],[2],[1,2]]
Note that the sets in the powerset do not need to be in any particular order
*/

function powerset(array) {
    // Write your code here.
    //O(n*2^n) time | space
    const subsets = [[]]
    for (const ele of array) {
        const length = subsets.length
        for (let i =0; i< length; i++){
            const currentSubset = subsets[i]
            subsets.push(currentSubset.concat(ele))
        
        }
    }
    return subsets;
  }
  
  // Do not edit the line below.
  exports.powerset = powerset;

  function powerset2(array, idx = null) {
    // Write your code here.
    //O(n*2^n) time | space
    if(idx ===null) {
        idx = array.length-1;
    }
    if (idx <0){
        return [[]]
    }
    const ele = array[idx]
    const subsets = powerset(array,idx-1)
    const length = subsets.length
    for (let i = 0; i< length; i++){
        const currentSubset = subsets[i]
        subsets.push(currentSubset.concat(ele))
    }
    return subsets;
  }

