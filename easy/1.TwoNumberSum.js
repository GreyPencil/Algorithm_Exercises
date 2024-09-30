// function twoNumberSum(array, targetSum) {
//     const nums = {};
//     for (const num of array) {
//         console.log("nums", nums)
//         const potentialMatch = targetSum - num;
//         if (potentialMatch in nums) {
//             console.log("potentialMatch", potentialMatch)
//             console.log("num", num);
//             return [potentialMatch, num];
//         } else {
//             nums[num] = true;
//         }
//     }
//     return [];
// }

var array = [3,5,-1,8,11,1,-4,6];
var target = 8;

// twoNumberSum(array, target);

function twoSum(nums, target) {
    const numMap = {};
    for(let i=0; i<nums.length; i++) {
        const potentialMatch = target - nums[i];

        if(numMap[potentialMatch] !== undefined){
            return [numMap[potentialMatch], i]
        } else {
            numMap[nums[i]] = i
        }
    }
    return [];
};

twoSum(array, target);