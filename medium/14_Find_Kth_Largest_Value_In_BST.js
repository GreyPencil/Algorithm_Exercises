/* 
Write a function that takes in a bst and a positive integer k and returns the kth largest integer contained in the BST

You can assume that there will only be integer values in the BST and that k is less than or equal to the number of nodes in the tree

Also, for the purpose of this question, duplicate integers will be treated as distinct values. In other words, the second largest 
value in a BST constaining values {5, 7, 7} will be 7, not 5.
*/

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

class TreeInfo {
    constructor(numberOfNodesVisited, latestVisitednodeValue) {
        this.numberOfNodesVisited = numberOfNodesVisited;
        this.latestVisitednodeValue = latestVisitednodeValue;
    }
}

// O(h+k) time | O(h) space
  
  function findKthLargestValueInBst(tree, k) {
    // Write your code here.
    const treeInfo = new TreeInfo(0,-1);
    reverseInOrderTraverse(tree, k, treeInfo);
    return treeInfo.latestVisitednodeValue;
  }

  function reverseInOrderTraverse(node, k, treeInfo) {
      if(node === null || treeInfo.numberOfNodesVisited >= k) return;

      reverseInOrderTraverse(node.right, k, treeInfo);
          if (treeInfo.numberOfNodesVisited <k){
              treeInfo.numberOfNodesVisited++;
              treeInfo.latestVisitednodeValue = node.value;
              reverseInOrderTraverse(node.left, k, treeInfo);
          }
      }
  
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.findKthLargestValueInBst = findKthLargestValueInBst;
  
  