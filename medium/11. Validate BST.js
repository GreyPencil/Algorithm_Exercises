/* 
Write a function that takes in a protentially invalid Binary Search Tree and returns
a boolean representing whether the BST is valid.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a 
valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of
every node to its  left; its value is less than or equal to the values of every node to its right; and its children nodes
are either valid BST nodes themselves or None/null

A BST is valid if and only if all of its nodes are valid BST nodes.
*/
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
      return validateBstHelper(tree, -Infinity, Infinity);
  }

  function validateBstHelper(tree, minValue, maxValue){
      if(tree === null) return true;
      if (tree.value<minValue || tree.value >= maxValue) return false;
      const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
      return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;