/* 
Write a function that takes in an integer matrix of potentially
unequal height and width and returns the minimum number of passes
required to convert all negative integers in the matrix to positive integers.

A negative integer in the matrix can only be converted to a positive integer if one or more of its adjacent 
elements is positive. An adjacent element is an element that is to the left, 
to the right, above, or below the current element in the matrix.
Converting a negative to a positive simply involves multiplying it by -1.
Note that the 0 value is neither positive or negative, meaning that a 0 can't 
convert an adjacent negative to a positive.
A single pass through the matrix involves converting all the negative integers
that can be converted at a particular point in time.
For example, consider the following input matrix:
[
    [0,-2,-1],
    [-5, 2, 0],
    [-6, -2, 0],
]

After a first pass, only 3 values can be converted to positives;
[
    [0,2,-1],
    [5, 2, 0],
    [-6, 2, 0],
]
After a second pass, the remaining negative values can all be converted to positives
[
    [0, 2, 1],
    [5, 2, 0],
    [6, 2, 0],
]
Note that the input matrix will always contain at least one element. 
If the negative integers in the input matrix can't all be converted
to positives, regardless of how many passes are run, your function should return -1

Sample Input:
matrix = [
    [0,-1,-3,2,0],
    [1, -2, -5,-1,-3],
    [3, 0, 0,-4,-1],
]

Sample output: 3

*/
// O(w*h) time | O(w*h) space 
function minimumPassesOfMatrix(matrix) {
    const passes = convertNegatives(matrix)
    return !containsNegative(matrix) ? passes -1 : -1
  }
function convertNegatives(matrix){
    let nextPassQueue = getAllPositivePositions(matrix)

    let passes = 0;

    while (nextPassQueue.length > 0) {
        const currentPassQueue = nextPassQueue
        nextPassQueue = []

        while (currentPassQueue.length > 0){
            /* 
            In JavaScript, shifting elements from the start of an array is an O(n) time operation.
            To make this an O(1) time operation, we could use a more legitimate queue structure.
            For our time complexity analysis, we'll assume this runs in O(1) time
            Also, for this particular solution (Solution #1), we could actually just 
            turn this queue into a stack and replace `.shift()` with the constant-time `.pop()` operation

            */
           const [currentRow, currentCol] = currentPassQueue.shift()

           const adjacentPositions = getAdjacentPositions(currentRow, currentCol, matrix)
           for (const position of adjacentPositions) {
               const [row, col] = position;
               const value = matrix[row][col]
               if(value < 0){
                   matrix[row][col] *= -1;
                   nextPassQueue.push([row,col])
               }
           }
        }
        passes++
    }
    return passes;
}

    function getAllPositivePositions(matrix){
        const positivePositions = []
        
        for (let row =0; row < matrix.length; row++){
            for (let col = 0; col < matrix[row].length; col++){
                const value = matrix[row][col]
                if (value > 0) positivePositions.push([row, col])
            }
        }
        return positivePositions;
    }

    function getAdjacentPositions(row, col, matrix){
        const adjacentPositions = []

        if(row > 0) adjacentPositions.push([row-1, col])
        if(row < matrix.length-1) adjacentPositions.push([row+1, col])
        if(col > 0) adjacentPositions.push([row, col-1])
        if(col < matrix[0].length-1) adjacentPositions.push([row, col+1])

        return adjacentPositions
    }

    function containsNegative(matrix){
        for (const row of matrix){
            for (const value of row){
                if(value<0) return true
            }
        }
        return false;
    }
  // Do not edit the line below.
  exports.minimumPassesOfMatrix = minimumPassesOfMatrix;
