/* 
Write a function that takes in the head of a Singly Linked List and an integer k and removes the kth node from the end of the list.
The removal should be done in place, meaning that the original data structure should be mutated (no new structure should be created)

furthermore, the input head of the linked list should remain the head of the linked list after the emoval is done, even if the head is the node that's supposed to be removed. 
In other words, if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer.

Note that your function doesn't need to return anything.

You can assume that the input Linked List will always have at least two nodes and, more specifically, at least k nodes.

Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None/null if it's the tail of the list.

Sample input:
head = 0 -> 1->2->3->4->5->6->7->8->9 //head node with value 0
k =4

Sample output: 0 -> 1->2->3->4->5->7->8->9
*/

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    // O(n) time  O(1) space
    let counter =1;
    let first = head;
    let second = head;
    while (counter <=k) {
        second = second.next;
        counter++
    }
    if (second ===null){
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }
    while (second.next !==null){
        second =second.next
        first = first.next
    }
    first.next = first.next.next
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;