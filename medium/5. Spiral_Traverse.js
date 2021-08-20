/* array = [
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7],
] 

output [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]*/

// O(n) time o(n) space

function spiralTraverse(array) {
    // Write your code here.
    const result = [];
    let startRow = 0;
    let endRow =array.length-1;
    let startCol = 0;
    let endCol = array[0].length-1;

    while (startRow <= endRow && startCol <= endCol){
        for(let i = startCol; i<= endCol; i++){
            result.push(array[startRow][i]);
        }
        for (let row = startRow+1; row <= endRow; row++){
            result.push(array[row][endCol]);
        }
        for (let col = endCol-1; col >= startCol; col--){
            if(startCol === endCol) break;
            result.push(array[endRow][col]);
        }
        for (let row = endRow -1; row >= startRow+1; row--){
            if(startRow === endRow) break;
            result.push(array[row][startCol]);
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
        
    }

    return result;
  }
  