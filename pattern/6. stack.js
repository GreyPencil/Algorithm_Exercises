// -- Algorithms:
// -- Given an array, find the next greater element for each item. if there isn't one, output -1

/* Problem Restatement
For each element in the array, we need to find the next greater element. The "next greater element" for an element x in the array is the first element that comes after x and is greater than x. If no such element exists, we return -1 for that position.

How does the Algorithm Work?
To solve this efficiently, we use a stack to help us keep track of elements as we traverse the array from right to left (reverse order). The stack will help us efficiently track the next greater element for each item.

Steps:
Traverse the array in reverse order: We start from the last element because we want to check the next elements to the right of each element.
Use a stack: The stack helps to remember the "potential next greater elements."
For each element, we pop from the stack until we find a greater element or the stack becomes empty.
If the stack is not empty, the top of the stack is the next greater element.
If the stack is empty, there is no greater element for the current element, so we set the result to -1.
Push the current element onto the stack after processing it so that it can be used for future comparisons with earlier elements.
JavaScript Code */

function nextGreaterElement(arr) {
    let n = arr.length;
    let result = new Array(n).fill(-1); // Result array, initialized with -1
    let stack = []; // Stack to keep track of next greater elements

    // Traverse the array from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Pop elements from the stack that are smaller than or equal to arr[i]
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // If stack is not empty, then the top of the stack is the next greater element
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1];
        }

        // Push the current element onto the stack
        stack.push(arr[i]);
    }

    return result;
}

 // Example usage:
let arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(arr)); // Output: [5, 10, 10, -1, -1]
