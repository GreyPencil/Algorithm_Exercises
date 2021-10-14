/* 
write a function that takes in a Binary Tree and returns its diameter. The diameter of a binary tree
is defined as the length of its longest path, enven if that path doesn't pass through the root of the tree.

A path is a collection of connected nodes in a tree, where no node is connected to more than two other
nodes. The length of a path is the number of edges between the path's first node and its last node.
Each Binary Tree node has an integer value, a left child node, and a right child node. Children nodes can either be 
BinaryTree nodes themselves or None/null

                                                    1
                                                /      \
                                             3          2
                                           /   \       /  \ 
                                         4      5     6    7
                                        /        \  
                                       8          9
                                      /            \
                                    11             10

                                    Sample output: 6 //最长路径： 11-8-4-3-5-9-10，七个节点
*/
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class TreeInfo {
      constructor(diameter, height){
          this.diameter = diameter;
          this.height = height;
      }
  }
  
  function binaryTreeDiameter(tree) {
    // Write your code here.
    // O(n) time | O(h) space
    return getTreeInfo(tree).diameter;
  }
  function getTreeInfo(tree) {
    if(tree === null) {
        return new TreeInfo(0,0);
    }

    const leftTreeInfo = getTreeInfo(tree.left);
    const rightTreeInfo = getTreeInfo(tree.right);

    const lognestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
    const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    const currentDiameter = Math.max(lognestPathThroughRoot, maxDiameterSoFar);
    const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

    return new TreeInfo(currentDiameter, currentHeight);

  }
  
  // Do not edit the line below.
  exports.binaryTreeDiameter = binaryTreeDiameter;
  exports.BinaryTree = BinaryTree;
                                                   