/* 
"special" arrays and returns its product sum.

Non-empty array contains either integers or other "special" arrays. The product sum of a "special" array is the sum of its elements, where"special
 arrays inside it are summed themselves and then multiplied by their level of depth.
 depth: [] 1; [[]] 2; [[[]]] 3
 sample: [x,y]   x+y; [x,[y,z]]   x + 2*(y+z)

 O(n) time   O(d) space
*/

function productSum(array, multiplier = 1) {
    // Write your code here.
    let sum = 0;
    for (const element of array ){
        if(Array.isArray(element)){
            sum += productSum(element, multiplier +1);
        }else {
            sum += element;
        }
    }
    return sum* multiplier;
  }
  
  // Do not edit the line below.
  exports.productSum = productSum;