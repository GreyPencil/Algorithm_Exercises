/* The distance between a node in a Binary Tree and the tree's root is called the node's depth
Write a function that takes in a Binary tree and returns the sum of its nodes' depths.
Each BinaryTree node has an integer value, a left child node, and a right child node.
Children nodes can either be BinaryTree nodes themselves or Non/null */

// balanced tree: O(n) time and O(h) space
function nodeDepths(root) {
    // Write your code here.
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}];
    while (stack.length > 0){
        const {node, depth} = stack.pop();
        if (node === null) continue;
        sumOfDepths += depth;
        stack.push({node: node.left, depth: depth + 1});
        stack.push({node: node.right, depth: depth + 1});
    }
    return sumOfDepths;
  }

  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function nodeDepths2(root, depth = 0) {
      if(root === null) return 0;
      return depth + nodeDepths2(root.left, depth+1) + nodeDepths2(root.right, depth+1);

  }
