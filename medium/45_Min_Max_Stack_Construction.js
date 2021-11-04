/* 
Write a MinMaxStack class for a Min Max Stack. The class should support:
pushing an popping values on and off the stack.
Peeking at the value at the top of the stack.
Getting both the min and the max values in the stack at any given point in time.

All class methods; when considered independently, should run in constant time and with constant space.

Sample Usage:
MinMaxStack():
push(5)
getMin()
...
*/

class MinMaxStack {
    constructor(){
        this.minMaxStack = []
        this.stack = []
    }
    peek() {
      // O(1) time     O(1) space
      return this.stack[this.stack.length-1]
    }
  
    pop() {
      // O(1) time     O(1) space
      this.minMaxStack.pop()
      return this.stack.pop()
    }
  
    push(number) {
      // O(1) time     O(1) space
      const newMinMax = {min:number, max:number}
      if (this.minMaxStack.length) {
          const lastMinMax = this.minMaxStack[this.minMaxStack.length -1 ]
          newMinMax.min = Math.min(lastMinMax.min, number)
          newMinMax.max = Math.max(lastMinMax.max, number)
      }
      this.minMaxStack.push(newMinMax);
			this.stack.push(number)
    }
  
    getMin() {
      // O(1) time     O(1) space
      return this.minMaxStack[this.minMaxStack.length-1].min
    }
  
    getMax() {
      // O(1) time     O(1) space
      return this.minMaxStack[this.minMaxStack.length-1].max
    }
  }
  
  // Do not edit the line below.
  exports.MinMaxStack = MinMaxStack;