function threeNumberSort(array, order) {
    // O(n) time O(1) space
    const firstValue = order[0]
    const thirdValue = order[2]

    let firstIdx = 0;
    for (let idx = 0; idx < array.length; idx++){
        if (array[idx] === firstValue){
            swap(firstIdx, idx, array)
            firstIdx++
        }
    }
    let thirdIdx = array.length -1
    for (let idx = array.length-1; idx > -1; idx--){
        if (array[idx] === thirdValue){
            swap(thirdIdx, idx, array)
            thirdIdx --;
        }
    }
    return array
}

function swap(i, j ,array){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }