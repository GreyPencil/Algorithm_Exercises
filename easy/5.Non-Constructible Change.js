/* 
Given an array of positive integers representing the values of coins in your possession, write a function that returns the
min amount of change (min sum of money) that you cannot create. The given coins can have any positive
integer value and aren't necessarily unique(ie:you can have multiple coins of the same value)

Sample Input
coins = [5,7,1,1,2,3,22]
Sample Output
20
*/
function nonConstructibleChange(coins){
    coins.sort((a,b)=> a-b);
    let currentChangeCreated = 0;
    for(const coin of coins){
        if (coin > currentChangeCreated +1){
            return currentChangeCreated +1;
        } else {
            currentChangeCreated += coin;
        }
    }
    return currentChangeCreated +1;
}
