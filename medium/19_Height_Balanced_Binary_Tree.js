/* 
You're given the root node of a Binary Tree. Write a function that returns true if this Binary Tree is height
balanced and false if it isn't

A BinaryTree is height balanced if for each node in the tree, the difference between the height of its left
subtree and the height of its right subtree is at most 1.

Each BT node has an integer value, a left child node, and a right child node. Children nodes can either be BT nodes 
themselves or None/null

tree =                                              1
                                                /      \
                                             3          2
                                           /   \       /  \ 
                                         4      5     6    7
                                               /  \  
                                              8    9
sample output: true                                  
*/

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeInfo {
    constructor(height, isBalanced){
        this.height = height;
        this.isBalanced = isBalanced;
    }
}

function heightBalancedBinaryTree(tree) {
  // O(n) time | O(h) space
  const treeInfo = getTreeInfo(tree);
  return treeInfo.isBalanced;
}

function getTreeInfo(node) {
    if (node === null) return new TreeInfo(-1, true);

    const leftSubtreeInfo = getTreeInfo(node.left);
    const rightSubtreeInfo = getTreeInfo(node.right);

    const isBalanced = 
    leftSubtreeInfo.isBalanced &&
    rightSubtreeInfo.isBalanced &&
    Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <=1;
    const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
    return new TreeInfo(height, isBalanced);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;





