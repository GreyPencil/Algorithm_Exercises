/* 
Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every
left node in the tree for its corresponding right node.
Each BinaryTree node has an integer value, a left child node, and a right child node, children nodes can either be 
BinaryTree nodes themselves or None/null

tree =                                              1
                                                /       \
                                             2              3
                                           /   \           /  \ 
                                         4      5         6    7
                                        /  \  
                                       8    9

                    target:                         1
                                                /       \
                                             3              2
                                           /   \           /  \ 
                                         7      6         5    4
                                                              / \  
                                                            9    8                    

*/

function invertBinaryTree(tree) {
    // Write your code here.
    // O(n) time | O(d) space
    if (tree === null) return; //设置终止递归函数条件
    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
  }

function swapLeftAndRight(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.invertBinaryTree = invertBinaryTree;
