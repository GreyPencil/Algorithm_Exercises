/* 
The pre-order traversal of a Binary Tree is a traversal technique that starts at the trees root
node and vists nodes in the following order: current node -> left subtree - right subtree

Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree, 
write a function that creates the relevant BST and returns its root node.

The input array will contain the values of bST nodes in th eorder in which these nodes would be visited
with a pre-order traversal.
*/

class BST {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  class TreeInfo {
      constructor(rootIdx){
          this.rootIdx = rootIdx;
      }
  }
  
  function reconstructBst(preOrderTraversalValues) {
    // Write your code here.
    // O(n) time | space
    const treeInfo = new TreeInfo(0);
    return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
  }

  function reconstructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo){
      if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;

      const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
      if(rootValue < lowerBound || rootValue >= upperBound) return null;

      currentSubtreeInfo.rootIdx++;
      const leftSubtree = reconstructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo);
      const rightSubtree = reconstructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo);
      return new BST(rootValue, leftSubtree, rightSubtree);
  }
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.reconstructBst = reconstructBst;