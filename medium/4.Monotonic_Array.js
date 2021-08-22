function isMonotonic(array) {
	function equar(a, b) {
    if (a.length !== b.length) {
        return false
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}
  // Write your code here.
	let array1 = [];
	let array2 = [];
	for (let i = 0; i < array.length; i++){
		array1.push(array[i]);
		array2.push(array[i]);
	}
	array1.sort((a,b)=>a-b);
	let flag1 = false;
	let flag2 = false;
	if (equar(array1, array)){
		flag1 = true;
	} else {
		flag1 = false;
	}
	array2.sort((a,b)=>b-a);
	if (equar(array2, array)){
		flag2 = true;
	} else {
		flag2 = false;
	}
	if(flag1 || flag2) {
		return true;
	}else {
		return false;
	}
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

// solution2   O(n) time    O(1) space
function isMonotonic2(array) {
    // Write your code here.
    if(array.length <=2) return true;

    let direction = array[1] - array[0];
    for (let i =2; i < array.lenth; i++){
        if(direction === 0){
            direction = array[i] - array[i-1];
            continue;
        }
        if(breaksDirection(direction,array[i-1],array[i])){
            return false;
        }
    }
    return true;
  }
  function breaksDirection(direction, previousInt, currentInt) {
      const difference  = currentInt - previousInt;
      if(direction>0) return difference <0;
      return difference >0;
  }
  
  // Do not edit the line below.
//   exports.isMonotonic2 = isMonotonic2;


//   solution 3   O(n) time    O(1) space
function isMonotonic3(array) {
    // Write your code here.
    let isNonDecreasing = true;
    let isNonIncreasing = true;
    for (let i =1; i< array.length; i++){
        if(array[i]<array[i-1]) isNonDecreasing = false;
        if(array[i]>array[i-1]) isNonIncreasing= false;
    }
    return isNonDecreasing || isNonIncreasing;

  }
  
  // Do not edit the line below.
  exports.isMonotonic3 = isMonotonic3;