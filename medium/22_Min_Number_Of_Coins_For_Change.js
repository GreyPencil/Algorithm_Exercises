/* 
Given an array of positive integers representing coin denominations and a single non-negative integer n
representing a target amount of money, write a function that returns the smallest number of coins needed to 
make change for (to sum up to) that target amount using the given coin denominations

Note that you have access to an unlimited amount of coins. 
If it's impossible to make change for the target amount, return -1;
 */

function minNumberOfCoinsForChange(n, denoms) {
    // Write your code here.
    // O(nd) time    O(n) space
    const numOfCoins = new Array(n + 1).fill(Infinity);
    numOfCoins[0] = 0;
    console.log(numOfCoins);
    for (const denom of denoms) {
        for (let amount = 0; amount < numOfCoins.length; amount ++){
            if (denom <= amount){
                numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount-denom] +1);
                console.log(numOfCoins);
            }
        }
    }
    let result = numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
    console.log(result);
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

var denoms = [1, 10, 5];
var n = 7;

minNumberOfCoinsForChange(n, denoms);

