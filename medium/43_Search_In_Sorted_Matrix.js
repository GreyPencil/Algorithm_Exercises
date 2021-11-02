/* 
You're given a two-dimensional array (matrix) of distinct integers and a target
integer. Each row in the matrix is sorted, and each column is also sorted; the
matrix doesn't necessarily have the same height and width.
Write a function that returns an array of the row and column indices of
the target integer if it's contained in the matrix, otherwise [-1,-1]
*/

function searchInSortedMatrix(matrix, target) {
    // O(m+n) time  |O(1) space
    let row = 0;
    let col = matrix[0].length-1;
    while (row<matrix.length && col>=0){
        if (matrix[row][col]>target){
            col--
        }else if (matrix[row][col]<target){
            row++
        }else{
            return [row, col]
        }
    }
    return [-1,-1]
  }
  
  // Do not edit the line below.
  exports.searchInSortedMatrix = searchInSortedMatrix;
  