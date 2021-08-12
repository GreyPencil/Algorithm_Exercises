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
    redShirtHeights.sort((a,b)=> a -b);
    return false;
  }
  
  // Do not edit the line below.
  exports.classPhotos = classPhotos;
  