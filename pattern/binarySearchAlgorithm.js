const findTarget = (array, target) => {
    if(array.length == 0) return -1;

    if(array.length > 0 ){
        let left  = 0;
        let right = array.length -1;

        while(left <= right) {
            let middle = left + ((right - left) >>1);
            const potential = array[middle];
            if(potential == target){
                return middle;
            } else if(potential < target){
                left = middle + 1;
            }else{
                right = middle -1;
            }
        }
        return -1;
    }
  
}

const nums = [-1,0,3,4,5,9,12, 13, 14, 15, 16]
const target = 9     

const result = findTarget(nums, target);
console.log('result', result)