/* 
A matrix of potentially unequal height and width containing only 0/1; 
The matrix represents a two-toned image, where each 1 represents black and each 0
represents white. An island is defined as any nyumber of 1 that are horizontally or vertically adjacent 
(but not diagonally adjacent) and that don't touch the border of the image. In other words, a group of 
horizontally or vertically adjacent 1 isn't an island if any of those 1 are in the first row, last row, first column, 
or last column of the input matrix.

Note that an island can twist. in other words, it doesn't have to be a straight vertical line or a straight horizontal line;
it can be L-shaped, for example.

You can think of islands as patches of black that don't touch the border of the two-toned image.

Write a function that returns a modified version of the input matrix, where all of the islands are removed.
You remove an island by replacing it with 0s.

Naturally, your're allowed to mutate the input matrix.

Sample Input:
matrix = [
    [1,0,0,0,0,0]
    [0,1,0,1,1,1]
    [0,0,1,0,1,0]
    [1,1,0,0,1,0]
    [1,0,1,1,0,0]
    [1,0,0,0,0,1]
]

Sample Output:
matrix = [
    [1,0,0,0,0,0]
    [0,0,0,1,1,1]
    [0,0,0,0,1,0]
    [1,1,0,0,1,0]
    [1,0,0,0,0,0]
    [1,0,0,0,0,1]
]
*/

function removeIslands(matrix) {
    // Write your code here.
    // O(wh)  time   O(wh) space
    const onesConnectedToBorder = []
    for ( let row =0; row < matrix.length; row++) {
        onesConnectedToBorder.push([])
        for (let col = 0; col < matrix[0].length; col++){
            onesConnectedToBorder[row].push(false)
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++){
            const rowIsBorder = row ===0 || row === matrix.length -1;
            const colIsBorder = col === 0 || col === matrix[row].length -1;
            const isBorder = rowIsBorder || colIsBorder;
            if (!isBorder) continue;

            if (matrix[row][col] != 1) continue;
            findOnesConnectedToBorder(matrix, row, col, onesConnectedToBorder)
        }
    }

    for (let row =1; row < matrix.length -1; row++) {
        for (let col =1; col < matrix[row].length-1; col++){
            if (onesConnectedToBorder[row][col]) continue;
            matrix[row][col] = 0
        }
    }
    return matrix;
  }

  function findOnesConnectedToBorder(matrix, startRow, startCol, onesConnectedToBorder){
      const stack = [[startRow, startCol]]

      while (stack.length>0){
          const currentPosition = stack.pop()
          const [currentRow, currentCol] = currentPosition;

          const alreadyVisited = onesConnectedToBorder[currentRow][currentCol]
          if (alreadyVisited) continue;

          onesConnectedToBorder[currentRow][currentCol] = true;

          const neighbors = getNeighbors(matrix, currentRow, currentCol)
          for (const neighbor of neighbors) {
              const [row, col] = neighbor;
              if (matrix[row][col] != 1) continue;

              stack.push(neighbor)
          }
      }
  }

  function getNeighbors(matrix, row, col){
      const neighbors = []

      const numRows = matrix.length;
      const numCols = matrix[row].length;

      if (row -1 >= 0) neighbors.push([row-1, col]);
      if (row + 1 < numRows) neighbors.push([row+1, col]);
      if (col -1 >= 0) neighbors.push([row, col-1]);
      if (col +1 < numCols) neighbors.push([row, col+1]);

      return neighbors;
  }
  
  // Do not edit the line below.
  exports.removeIslands = removeIslands;
