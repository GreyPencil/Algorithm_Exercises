/* 
Implement a MinHeap class that supports:
1. Building a Min Heap from an input array of integers.
2. Inserting integers in the heap.
3. Removing the heap's minimum/root value
4. Peeking at the heap's minimum/root value
5. Sifting integers up and down the heap, which is to be used when inserting and removing values.
Note that the heap should be represented in the form of an array.

Sample Usage:
array = [48,12,24,7,8,-5,24,391,24,56,2,6,8,41]

All operations below are performed sequentially.
MinHeap(array): - // instantiate a MinHeap (calls the bildHeap method and populates the heap)
buildHeap(array): - //[-5,2,6,7,8,8,24,391,24,56,12,24,48,41]
insert(76): - //[-5,2,6,7,8,8,24,391,24,56,12,24,48,41, 76]
peek() : -5
remove(): -5 //[2,7,6,24,8,8,24,391,76,56,12,24,48,41]
peek():2
remove():2 [6,7,8,24,8,24,24,391,76,56,12,41,48]
peek():6
insert(87): - [6,7,8,24,8,24,24,391,76,56,12,41,48,87]
*/

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    buildHeap(array) {
        // O(n) time   O(1) space
        const firstParentIdx = Math.floor((array.length - 2) / 2)
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length - 1, array)
        }
        return array;
    }

    siftDown(currentIdx, endIdx, heap) {
        // O(log(n)) time       O(1) space
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let idxToSwap;
            if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx
            }
            if (heap[idxToSwap] < heap[currentIdx]){
                this.swap(currentIdx, idxToSwap,heap)
                currentIdx = idxToSwap
                childOneIdx = currentIdx*2 +1
            } else {
                return;
            }
        }

    }

    siftUp(currentIdx, heap) {
        // O(log(n)) time       O(1) space
        let parentIdx = Math.floor((currentIdx-1)/2)
        while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(currentIdx, parentIdx, heap)
            currentIdx = parentIdx
            parentIdx = Math.floor((currentIdx-1)/2)
        }
    }

    peek() {
        // O(1) time       O(1) space
        return this.heap[0]
    }

    remove() {
        // O(log(n)) time       O(1) space
        this.swap(0, this.heap.length -1, this.heap)
        const valueToRemove = this.heap.pop()
        this.siftDown(0, this.heap.length -1, this.heap)
        return valueToRemove;
    }

    insert(value) {
        // O(log(n)) time       O(1) space
        this.heap.push(value)
        this.siftUp(this.heap.length -1, this.heap)
    }

    swap(i,j,heap){
        const temp = heap[j]
        heap[j] = heap[i]
        heap[i] = temp;
    }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;