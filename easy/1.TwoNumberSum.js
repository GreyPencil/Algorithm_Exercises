function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        console.log("nums", nums)
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            console.log("potentialMatch", potentialMatch)
            console.log("num", num);
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

var array = [3,5,-1,8,11,1,-4,6];
var target = 100;

twoNumberSum(array, target);