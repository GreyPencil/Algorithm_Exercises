/*
sample input: [10,10,12]  sample out put: [10,10,12] 
sample input: [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]  sample out put: [141,541,18] 
 */

function findThreeLargestNumbers(array) {
    // Write your code here.
    // O(nlogn) time O(1) space
    array.sort((a,b) => b-a);
	let arrayThree = [];
	arrayThree.push(array[2]);
	arrayThree.push(array[1]);
	arrayThree.push(array[0]);
	
	return arrayThree;

  }
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;

//   array.sort((a,b) => b-a);
	let arrayThree = [];
    arrayThree.push(3);
    arrayThree.push(2);
    console.log(arrayThree);


    // ===================================================================================


    function find3(array){
        // O(n)time O(1) spacest
        const threeLargest = [null, null, null];
        for (const num of array) {
            updateLargest(threeLargest, num);
        }
        return threeLargest;
    }

    function updateLargest(threeLargest, num){
        if (threeLargest[2] === null || num > threeLarget[2]){
            shiftAndUpdate(threeLarget, num, 2);
        }else if (threeLargest[1] === null || num > threeLarget[1]){
            shiftAndUpdate(threeLargest, num, 1);
        }else if (threeLargest[0] === null || num > threeLarget[0]){
            shiftAndUpdate(threeLargest,num, 0);
        }
        return threeLargest;
    }

    function shiftAndUpdate(array, num, index){
        for (let i = 0; i<= index; i++){
            if( i === index) {
                array[i] = num;
            }else {
                array[i]=array[i+1];
            }
    }
}
	