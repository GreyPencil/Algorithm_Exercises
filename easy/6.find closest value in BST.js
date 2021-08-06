/* 
Write a function that takes in a Binary Search Tree and a target integer value and returns the closest value to that target value contained in the BST
You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node
if and only if it satisfies the BST property: its value is strictly geater than the values of every node to its left;
its value is less than or equal to the values of every node to its right; and its children nodes 
are either valid BST nodes themselves or Non/null
*/
// O(logn) time, O(1) space
function findClosestValueInBst(tree, target) {
    // Write your code here.
    return findClosestValueHelper(tree, target, tree.value);
  }

  function findClosestValueHelper(tree, target, closest){
     if (tree === null) return closest;
     if(Math.abs(target - closest) > Math.abs(target-tree.value)){
         closest = tree.value;
     } 
     if(target < tree.value){
         return findClosestValueHelper(tree.left, target, closest)
     }
     if(target > tree.value){
        return findClosestValueHelper(tree.right, target, closest)
    } else {
        return closest;
    }
  }
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  