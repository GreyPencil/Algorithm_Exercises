/* Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
A branch sum is the sum of all values in a Binary Tree branch. A binary tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
Each Binarytree node has an integer value. a left child node, and a right child node.
Children nodes acan either be BinaryTree nodes themselves or None/Null */
//  O(n) time and O(n) space

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
      const sums = [];
      calculateBranchSums(root, 0, sums);
      return sums;
  }
  function calculateBranchSums(node, runningSum, sums){
      if(!node) return;
      const newRunningSum = runningSum + node.value;
      if(!node.left && !node.right){
          sums.push(newRunningSum);
          return;
      }
      calculateBranchSums(node.left, newRunningSum, sums);
      calculateBranchSums(node.right, newRunningSum, sums);
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;