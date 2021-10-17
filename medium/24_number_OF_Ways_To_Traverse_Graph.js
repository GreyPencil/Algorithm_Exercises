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

  function numberOfWaysToTraverseGraph2(width, height) {
    // Write your code here.
    // O(n*m) time  || O(n*m) space
    const numberOfWays =[]
    for(let i=0; i<height +1; i++){
        numberOfWays.push([]);
        for (let j =0; j< width +1;j++){
            numberOfWays[i].push(0)
        }
    }

    for (let widthIdx =1; widthIdx < width +1; widthIdx++){
        for (let heightIdx =1; heightIdx <height+1; heightIdx++){
            if (widthIdx === 1 || heightIdx ===1){
                numberOfWays[heightIdx][widthIdx] =1;
            } else {
                const waysLeft = numberOfWays[heightIdx][widthIdx -1];
                const wayUp = numberOfWays[heightIdx-1][widthIdx]
                numberOfWays[heightIdx][widthIdx] = waysLeft + wayUp;
            }
        }
    }
    return numberOfWays[height][width]
  }
  
  // Do not edit the line below.
  exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;