/* 
given an array of integers between 1 and n, inclusive, where n is the array.length
find the first duplicate value.
if no, return -1


sample input :  [2, 1, 5, 2, 3, 3, 4]   sample output: 2
sample input :  [2, 1, 5, 3, 3, 2, 4]   sample output: 3

*/
function firstDuplicate(array){
    // O(n) time O(1) space
    for (const value of array){
        const absValue = Math.abs(value);
        if(array[absValue -1]<0) return absValue;
        array[absValue-1] *= -1;
    }
    return -1;
}

function find2(array){
    const seen = new Set();
    for (const value of array){
        if (seen.has(value)) return value;
        seen.add(value);
    }
    return -1;
}

function find3(array){
    // O（n^2)   time    O(1) space
    // TODO: cam optimize index, do not to iterate when index greater than minIndex.
    let minIndex = array.length;
    for (let i = 0; i < array.length; i++){
        const value = array[i];
        for (let j = i+1; j<array.length; j++){
            const valueToCompare = array[j];
            if(value === valueToCompare){
                minIndex = Math.min(minIndex, j);
            }
        }
    }
    if (minIndex === array.length) return -1;

    return array[minIndex];
}