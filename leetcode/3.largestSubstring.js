/* Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.





To solve this problem, you can use a sliding window technique to keep track of the longest substring without repeating characters. The sliding window is a two-pointer approach that moves across the string while keeping track of the characters that have been seen and their positions.

Algorithm:
Use two pointers, left and right, to represent the current window of non-repeating characters.
Use a hash map (charIndexMap) to store the most recent index of each character in the current window.
As you iterate with the right pointer over the string:
If the character at right is already in the window (i.e., exists in charIndexMap and its value is greater than or equal to left), move the left pointer to charIndexMap[char] + 1 to avoid repeating characters.
Update the character's index in charIndexMap.
Update the maximum length (maxLength) of the window.
This ensures that each character is checked once, making the time complexity O(n), where n is the length of the string.

Code Implementation:*/

function lengthOfLongestSubstring(s) {
    let charIndexMap = new Map();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (charIndexMap.has(s[right])) {
            // Move the left pointer to the right of the last occurrence
            console.log('charIndexMap.get(s[right]) + 1', charIndexMap.get(s[right]))
            left = Math.max(charIndexMap.get(s[right]) + 1, left);
            console.log('right', right)
            console.log('left', left)
        }
        // Update the latest index of the current character
        charIndexMap.set(s[right], right);
        // Update the max length of the substring
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

lengthOfLongestSubstring("abcabcbb");
