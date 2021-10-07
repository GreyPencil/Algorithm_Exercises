/* 
Write a fun that takes in a non-empty sorted array of distince integers, constructs a BST from
the integers, and returns the root of the BST.
The fun should min the height of the BST.
You've been provided with a BST class that you'll have to use to construct the BST.
A BST is valid if and only if all of its nodes are valid BST nodes.
Note that the BST class already has an insert method which you can use if u want.

sample input:
array = [1,2,5,7,10,13,14,15,22]
Sample output:
        10
      /    \
    2       14
  /   \     /  \
1      5  13    15
        \         \
        7          22
*/

function minHeightBst1(array) {
    // Write your code here.
    //O(nlogn) time     O(n) space
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;