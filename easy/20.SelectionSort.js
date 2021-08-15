function selectionSort(array) {
  /* O(1) space
    best: O(n) time 
    worst:O(n^2) time
    average:O(n^2) time
    */
    // Write your code here.
     for(let i = 0; i< array.length; i ++){
       var arrow = i;
       for (let j = i+1; j < array.length; j++){
          if(array[j] < array[arrow]){
            arrow = j;
          }
       }
       swap (i,arrow,array);
     }
     return array;
  }

  function swap(i, j ,array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  