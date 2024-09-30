// 3. largest sub string:
let s1 = "abcabcbb";
let s2 = "bbbbb";
let s3 = "pwwkew";

const findLargestSubString = (string) => {
    let mapIndex = new Map();
    let left = 0;
    let maxLength = 0;
    let longestSubstr = "";

    for(let right = 0; right < string.length; right ++ ){
        if(mapIndex.has(string[right])){
            left++;
            
        }
    }

    return maxLength;

}