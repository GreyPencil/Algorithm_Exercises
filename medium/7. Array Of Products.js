/* 
returns an array of thesame length, where each elements in the output array
is equal to the product of every other number in the input array.

array [5,1,4,2]
output: [8, 40, 10, 20]
8=1*4*2
40=5*4*2
10=5*1*2
*/
// O(n) time O(2n)/O(n) space
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

//   O(n^2) time O(n) space
  function arrayOfP(array){
      const products = [];

      for(let i =0; i<array.length; i++){
          let runningProduct =1;
          for(let j =0; j<array.length; j++){
              if(i !==j){
                  runningProduct *= array[j];
              }
              products[i] = runningProduct;
          }
      }

      return products;
  }
  