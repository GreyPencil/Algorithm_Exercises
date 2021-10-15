/* 
Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node)
as well as a node contained in that tree and returns the given node's successor.

A node's successor is the next node to be bisited (immediately after the given node) when traversing its tree using the in-order tree-traversal techinique.
A node has no successor if it's the last node to be visited in the in-order traversal.

If a node has no successor, your function should return None/null.

Each BinaryTree node has an integer value, a parent node, a left child node, and a righ child node. 
Children nodes can either be BinaryTree nodes themselves or None/null.

tree = 
                                                    1
                                                /      \
                                             2          3
                                           /   \          
                                         4      5         
                                        /          
                                       6  
                                       node = 5    
                                    Sample Output: 1  // This tree's in-order traversal order is: 6 -> 4-> 2 -> 5 -> 1 -> 3,  1 comes immediately after 5  
                                      
*/

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node) {
    //O(n) time |O(1) space
    if (node.right != null) return getLeftmostChild(node.right);
    return getRightmostParent(node);
  }

  function getLeftmostChild(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode; 
  }
  function getRightmostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
      currentNode = currentNode.parent;
    }
    return currentNode.parent;
  } 
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.findSuccessor = findSuccessor;