class ArrayStack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
    return this;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}

const stack = new ArrayStack();
stack.push("Cook dinner");
stack.push("Wash the dishes");
stack.push("Buy ingredients");

console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
stack.pop();
