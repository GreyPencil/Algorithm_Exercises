/* 
returns an array of thesame length, where each elements in the output array
is equal to the product of every other number in the input array.

array [5,1,4,2]
output: [8, 40, 10, 20]
8=1*4*2
40=5*4*2
10=5*1*2
*/
function arrayOfProducts(array) {
    // Write your code here.
    let production = 1;
    let array1 =new Array(array.length).fill(1);

    for (let i = 0; i< array.length; i++){
        array1[i] = production;
        production *= array[i];
    }

    let rightProduction = 1;
    for(let i = array.length -1; i>=0; i--){
        array1[i] *= rightProduction;
        rightProduction *= array[i];
    }

    return array1;


  }
  