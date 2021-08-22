/* 
A peak is defined as adjacent integers in the array that are strictly increaing until they reach a tip, at which point they become strictly decreasing. At least three integers are required to form a peak.
Peak:  1, 4, 10, 2
no peak: 4, 0 ,10               1,2,2,0                 1.2.3

sample input: [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
sample output: 6
*/
// O(n) time         O(1) space

function jiecheng(n){
    if ( n === 0) return 1;
    return n*jiecheng(n-1);
}

const result = jiecheng(4);
console.log(result);


function longestPeak(array){
    let longestPeakLength = 0;
    let i = 1;
    while(i<array.length-1){
        const isPeak = array[i]>array[i-1] && array[i]>array[i+1];
        if(!isPeak){
            i++;
            continue;
        }
        let leftIdx = i-2;
        console.log(leftIdx);
        while (leftIdx >=0 && array[leftIdx] < array[leftIdx+1]){
            leftIdx--;
            console.log("left:", leftIdx);
        }
        let rightIdx = i+2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx-1]){
            rightIdx++;
            console.log("right:", rightIdx);
        }
        // 注意这里是-1， 因为rightIdx是i+2， leftIdx是i-2
        const current = rightIdx - leftIdx -1;

        longestPeakLength = Math.max(longestPeakLength, current);
        i = rightIdx;
    }
    return longestPeakLength;
}


longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);