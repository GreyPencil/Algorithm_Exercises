function bubbleSort(array) {
    // Write your code here.
    /* O(1) space
    best: O(n) time 
    worst:O(n^2) time
    average:O(n^2) time
    */
    let flag = false;
    let counter = 0;
    while (!flag){
        flag = true;
        for (let i = 0; i < array.length -1-counter; i++){
            if(array[i]>array[i+1]){
                swap(i, i+1, array);
                flag = false;
            } 
        }
        counter++;
    }
    return array;

  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;

  function swap(i, j ,array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }