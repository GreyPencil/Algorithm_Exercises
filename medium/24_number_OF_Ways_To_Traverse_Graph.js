/* 
You're given two positive integers representing the width and height of a grid-shaped, rectagular graph.
Write a function that returns the number of ways to reach the bottom right corner of the graph when starting at the top left corner. 
Each move you take must either go down or right. In other words, you can never move up or left in the graph.
For example:
width:2    height: 3
you have 3 ways: 
1. down, down, right
2. right down, down,
3. down, right, down

sample input:  w: 4, h: 3
sample output: 10
*/

function numberOfWaysToTraverseGraph(width, height) {
    // Write your code here.
    // O(2^(n+m)) time  || O(n+m) space
    if (width === 1||height ===1) return 1;

    return numberOfWaysToTraverseGraph(width -1, height) + numberOfWaysToTraverseGraph(width, height-1);
  }
  
  // Do not edit the line below.
  exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;