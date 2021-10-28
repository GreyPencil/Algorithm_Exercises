/* 
Write a DoublyLinkedList class that has a head and a tail, both of which point to either a linked list Node or None/null. The class should support:
1. setting the head and tail of the linked list.
2. Inserting nodes before and after other nodes as well as at given positions(the position of the head node is 1)
3. Removing given nodes and removing nodes with given values.
4. searching for nodes with given values.

Note that thesetHead, setTail, inseertBefore, insertAfter, insertAtPosition, and remove methods all take in actual Node s as input parameters -- not integers
(except for inserAtPosition, which also takes in an integer representing the position): this means that you don't need to create any new Node s in these methods.
The input nodes can be either stand-alone nodes or nodes that are already in the linked list. If they're nodes that are already in the linked list,
the methods will efectively be moving the nodes within the linked list. you won't be told if the input nodes are already in the linked list, so your code will have to defensively handle this scenario.

If you're doing this problem in an untyped language like Python or JS, you may want to look at the various function signatures in a typed language like java or TypeScript to get a better idea of what each 
input parameter is.

Each Node has an integer value as well as a prev node and a next node, both of which can point to either another node or None/null

Sample Usage
we have linked list has already vbeen created:
1 <-> 2<->3<->4<->5
also have the stand-alone nodes:
3,3,6

setHead(4): 4 <-> 1<->2<->3<->5
setTail(6): 4 <-> 1<->2<->3<->5<->6 // 6 from stand-alone node
insertBefore(6,3): 4 <-> 1<->2<->5<->3<->6  // move the existing node with value 3 before the existing node with value 6
insertAfter(6,3): 4 <-> 1<->2<->5<->3<->6 <->3 // insert a stand-alone node with value 3 after the existing node with value 6
insertAtPosition(1,3): 3<->4 <-> 1<->2<->5<->3<->6 <->3// insert a stand-alone node with value 3 in position 1
removeNodesWithValue(3): 4 <-> 1<->2<->5<->6 // remove all nodes with value 3
remove(2): 4 <-> 1<->5<->6
containsNodeWithValue(5): true
*/
export class Node {
    value: number;
    prev: Node | null;
    next: Node | null;
  
    constructor(value: number) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Feel free to add new properties and methods to the class.
  export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    setHead(node: Node) {
      // O(1) time   | space
      if (this.head === null) {
          this.head = node;
          this.tail = node;
          return;
      }
      this.insertBefore(this.head, node);
    }
  
    setTail(node: Node) {
      // O(1) time   | space
      if (this.tail === null) {
        this.setHead(node);
    ;
        return;
    }
    this.insertAfter(this.tail, node);
    }
  
    insertBefore(node: Node, nodeToInsert: Node) {
      // O(1) time O(1) space
      if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
      this.remove(nodeToInsert)
      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
      if(node.prev === null){
          this.head = nodeToInsert;
      }else {
          node.prev.next = nodeToInsert;
      }
      node.prev = nodeToInsert
    }
  
    insertAfter(node: Node, nodeToInsert: Node) {
      // O(1) time O(1) space
      if (nodeToInsert === this.head && nodeToInsert === this.tail) return
      this.remove(nodeToInsert)
      nodeToInsert.prev = node;
      nodeToInsert.next = node.next
      if (node.next === null) {
          this.tail = nodeToInsert
      }else {
          node.next.prev = nodeToInsert
      }
      node.next = nodeToInsert
    }
  
    insertAtPosition(position: number, nodeToInsert: Node) {
      // O(1) time O(1) space
      if (position ===1){
          this.setHead(nodeToInsert)
          return;
      }
      let node = this.head;
      let currentPosition =1;
      while (node !== null && currentPosition++ !== position) node = node.next;
      if (node !== null) {
          this.insertBefore(node,nodeToInsert)
      }else{
          this.setTail(nodeToInsert)
      }
    }
  
    removeNodesWithValue(value: number) {
      // O(n) time O(1) space
      let node = this.head;
      while (node !==null){
          const nodeToRemove = node;
          node = node.next;
          if (nodeToRemove.value === value) this.remove(nodeToRemove)
      }
    }
  
    remove(node: Node) {
      // O(1) time O(1) space
      if (node === this.head) this.head = this.head.next
      if (node === this.tail) this.tail = this.tail.prev
      this.removeNodeBindings(node)
    }
  
    removeNodeBindings(node: Node){
        if (node.prev !== null) node.prev.next = node.next;
        if (node.next !== null) node.next.prev = node.prev;
        node.prev = null
        node.next = null
    }
    containsNodeWithValue(value: number) {
      // O(n) time O(1) space
      let node = this.head;
      while (node !==null && node.value !== value) node = node.next;
      return node !==null;
    }

  }
  