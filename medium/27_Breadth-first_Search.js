/* 
given a Node class that has a name and an array of optional children nodes. When put together,
nodes form an acyclic tree-like structure.

Implement the breadthFirstsearch method on the NOde class, which takes in anempty array,
traverses the tree using the Breadth-first Search approach (specifically navigating the tree from left to right).
stores all of the nodes' names in the input array, and returns it.

Sample Input: graph =                               A
                                                /   |   \
                                             B     C    D
                                           /   \       /  \ 
                                         E      F     G    H
                                               / \     \
                                              I   J     K

Sample Output: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
*/

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
      // Write your code here.
    // O(v+e) time |O(v) space    where v is node and e is edge
        const queue = [this]
        console.log(queue);
        while (queue.length>0){
            const current = queue.shift()
            array.push(current.name)
            for (const child of current.children){
                queue.push(child)
            }
        }
        return array;
    }
  }

  function A(array){
      const queue = [this]
      console.log("queue:" , queue)
  }

  