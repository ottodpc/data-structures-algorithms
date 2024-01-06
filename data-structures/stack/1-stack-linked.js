class LinkedStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = { value, next: null };
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    this.length--;
    return poppedNode;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  clear() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
}

const stack = new LinkedStack();
stack.push("Cook dinner");
stack.push("Wash the dishes");
stack.push("Buy ingredients");
stack.push("Do the laundry");

console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.pop());
