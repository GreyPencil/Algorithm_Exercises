/* it's photo day at the local school, and you are the photographer assigned to take class photos. 
The class that you'll be phto has an even number of students, and all these students are wearing red or blue shirts. Infact, exactly half of
the class is wearing red shirts, and the other half iswearing blue shirts. You are responsible
for arranging the students in two row before taking the photo. Each row should contain the same number of the students and should adhere to the following guidelines:
1. all students wearing red shirts must be in the same row
2. all students wearing blue shirts must be in the same row
3. each student in the back row must be strictly taller than the student directly infront of them in the front row.

You will have two arrays, one containing the heights of all the students with red, another blue. same length. positive integer. return blooean whether or not a class photo that follows the stated guidelines 

assume each class has at least 2 students

sample input: [5,8,1,3,4]  [6,9,2,4,5]
output: true

O(nlogn) time O(1) space
 */

function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
    redShirtHeights.sort((a,b)=> a -b);
    blueShirtHeights.sort((a,b)=> a -b);
    let l = redShirtHeights.length;
    console.log(l);
    for(let i = 0; i< l; i++){
        console.log("blue:", blueShirtHeights[l-1]);
        console.log("red:", redShirtHeights[l-1]);
        const redHeight = redShirtHeights[i];
        const blueHeight = blueShirtHeights[i];
        if(redShirtHeights[l-1]>blueShirtHeights[l-1]){
            console.log(111);
           if (blueHeight>=redHeight){
            console.log("red:", redShirtHeights[l-1]);
               return false;
               
           }
        }else if (redShirtHeights[l-1]<blueShirtHeights[l-1]){
            console.log(222);
            console.log("blue", blueShirtHeights);
            console.log("red", redShirtHeights);
            if (redHeight>=blueHeight){
                console.log("blue:", blueShirtHeights[l-1]);
                return false;
                
            }
        } else {
            return false;
        }
        console.log(3)
        
    }
    return true;
    
  }
  
  // Do not edit the line below.
//   exports.classPhotos = classPhotos;
  
classPhotos([19,2,3,6,4,2,3,1,1,4], [21,5,4,4,4,4,4,4,4,4]);