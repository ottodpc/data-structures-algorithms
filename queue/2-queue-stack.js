class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) return null;
      while (this.stack1.length > 0) {
        const value = this.stack1.pop();
        this.stack2.push(value);
      }
    }
    return this.stack2.pop();
  }

  size() {
    return this.stack1.length + this.stack2.length;
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  clear() {
    this.stack1 = [];
    this.stack2 = [];
  }

  peek() {
    if (this.stack2.length > 0) {
      return this.stack2[this.stack2.length - 1];
    }
    return this.stack1[0];
  }

  toString() {
    if (this.stack2.length > 0) {
      return this.stack2.toString();
    }
    return this.stack1.toString();
  }
}

const queue = new QueueUsingStack();
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.isEmpty());
