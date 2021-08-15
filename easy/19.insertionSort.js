function swap(i, j ,array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
 /* O(1) space
    best: O(n) time 
    worst:O(n^2) time
    average:O(n^2) time
    */
  function insertionSort(array) {
    // Write your code here.
    for(let i = 1; i<array.length;i++){
        let j = i;
        while (j> 0 && array[j]<array[j-1]){
            swap(j, j-1, array);
            j--;
        }
    }
    return array;
  }
