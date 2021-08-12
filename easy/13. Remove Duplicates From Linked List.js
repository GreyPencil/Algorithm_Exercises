/* 
given a sorted linked list
{
  "linkedList": {
    "head": "1",
    "nodes": [
      {"id": "1", "next": "1-2", "value": 1},
      {"id": "1-2", "next": "1-3", "value": 1},
      {"id": "1-3", "next": "2", "value": 1},
      {"id": "2", "next": "3", "value": 3},
      {"id": "3", "next": "3-2", "value": 4},
      {"id": "3-2", "next": "3-3", "value": 4},
      {"id": "3-3", "next": "4", "value": 4},
      {"id": "4", "next": "5", "value": 5},
      {"id": "5", "next": "5-2", "value": 6},
      {"id": "5-2", "next": null, "value": 6}
    ]
  }
}
sample input: linkedList = 1->1 -> 3 -> 4 -> 4-> 4-> 4->5 -> 6-> 6
sample output: 1-> 3 -> 4->5-> 6

O(n) time O(1) space

*/

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let currentNode = linkedList;
    console.log("currentNode:",currentNode);
    console.log("currentNode.next:",currentNode.next);
    while (currentNode !== null){
        let nextDistinctNode = currentNode.next;
        while(nextDistinctNode !== null && nextDistinctNode.value === currentNode.value){
            nextDistinctNode = nextDistinctNode.next;
        }
        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;
    }

    return linkedList;
  }
  
  removeDuplicatesFromLinkedList( 
     [
        {"id": "1", "next": "1-2", "value": 1},
        {"id": "1-2", "next": "1-3", "value": 1},
        {"id": "1-3", "next": "2", "value": 1},
        {"id": "2", "next": "3", "value": 3},
        {"id": "3", "next": "3-2", "value": 4},
        {"id": "3-2", "next": "3-3", "value": 4},
        {"id": "3-3", "next": "4", "value": 4},
        {"id": "4", "next": "5", "value": 5},
        {"id": "5", "next": "5-2", "value": 6},
        {"id": "5-2", "next": null, "value": 6}
      ]
    
  );
