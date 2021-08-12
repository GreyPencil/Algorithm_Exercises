/* A tandem bicycle is a bicycler that's operated by two people;
A and B. 
Both people pedal the bicycle, but the person that pedals faster dictates the speed of the bicycle. 
So if A pedals at a speed of 5, and b 4. the tandem bicycle moves at a speed of 5
You get two list positive integers: one contains speeds of riders in red, another in blue.your goal is to pair
every rider in red and blue to operate a tandem bicycle.
sample input [1,4] [5,3]  true  sample output 9 
sample input [1,4] [5,3]  false  sample output 4 


O(nlogn) time and O(1) space
*/

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    redShirtSpeeds.sort((a,b)=>a-b);
    blueShirtSpeeds.sort((a,b)=> b-a);
    if(!fastest) reverse(redShirtSpeeds);
    let speed = 0;
    for(let i = 0; i< redShirtSpeeds.length; i++){
        if(fastest){
            speed += redShirtSpeeds[i] >= blueShirtSpeeds[i]? redShirtSpeeds[i] : blueShirtSpeeds[i];
        }else{
            console.log(redShirtSpeeds);
            speed += redShirtSpeeds[i] >= blueShirtSpeeds[i]? redShirtSpeeds[i] : blueShirtSpeeds[i];
        }
    }
    return speed;
  }
  function reverse (array){
      let start = 0;
      let end = array.length-1;
      while(start < end){
          let temp = array[start];
          array[start] = array[end];
          array[end] = temp;
          start ++;
          end --;
      }

  }
  
tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false);