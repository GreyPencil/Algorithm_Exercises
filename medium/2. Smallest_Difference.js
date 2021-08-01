/* Write a function that takes in two non-empty arrays of integers, finds the pair of numbers
one from each array, whose absolute difference is closest to zero, and returns an array containing these two
numbers, with the number from the first array in the first position.

Note that the absolute difference of two integers is the distance between them
on the real number lne. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -1 is 1

you can assume that there will only be one pair of numbers with the smallest difference*/
/* O(nlog(n) + mlog(m)) time |  O(1) space*/
function smallestDifference(arrayOne, arrayTwo){
    arrayOne.sort((a,b) => a -b);
    arrayTwo.sort((a,b) => a -b);
    let array = [];
    let target = arrayTwo[arrayTwo.length-1] - arrayOne[0];
    let smallest = arrayTwo[arrayTwo.length-1] - arrayOne[0];
    let indexOne = 0;
    let indexTwo = 0;
    while (indexOne < arrayOne.length && indexTwo < arrayTwo.length){
        let firstNum = arrayOne[indexOne];
        let secondNum = arrayTwo[indexTwo];
        if(firstNum < secondNum){
            target = secondNum - firstNum;
            indexOne++;
        } else if(firstNum > secondNum){
            target = firstNum - secondNum;
            indexTwo++;
        } else if(firstNum === secondNum){
            return array = [firstNum,firstNum];
        }
        if(smallest > target){
            smallest = target;
            array = [firstNum,secondNum]
        }
    }
    return array;
}
exports.smallestDifference = smallestDifference;