class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.prev = null;
  }

  // O(1)
  prepend(value) {
    const newNode = { value, next: this.head, prev: null };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  // O(1)
  append(value) {
    const newNode = { value, next: null, prev: this.tail };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
    return this;
  }

  // O(n)
  find(value) {
    if (!this.head) {
      return null;
    }
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }

  // O(n)
  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value, next: existingNode.next, prev: existingNode };
      existingNode.next = newNode;
    }
    return this;
  }

  // O(n)
  delete(value) {
    if (!this.head) {
      return null;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }
    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = curNode;
    }
    return this;
  }

  // O(n)
  deleteTail() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return this;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    return this;
  }

  // O(n)
  deleteHead() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return this;
    }
    this.head = this.head.next;
    this.head.prev = null;
    return this;
  }

  // O(n)
  toArray() {
    const elements = [];
    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }

  // O(n)
  reverse() {
    let curNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (curNode) {
      nextNode = curNode.next;
      prevNode = curNode.prev;
      curNode.next = prevNode;
      curNode.prev = nextNode;
      prevNode = curNode;
      curNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
}

const linkedList = new DoublyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.append(7);

console.log("linkedList.toArray() :>> ", linkedList.toArray());
console.log("linkedList.reverse() :>> ", linkedList.reverse());
console.log("linkedList.toArray() :>> ", linkedList.toArray());
console.log("linkedList.reverse() :>> ", linkedList.reverse());
console.log("linkedList.toArray() :>> ", linkedList.toArray());
console.log("linkedList.reverse() :>> ", linkedList.reverse());
console.log("linkedList.toArray() :>> ", linkedList.toArray());

console.log("linkedList.delete(3) :>> ", linkedList.delete(3));
console.log("linkedList.toArray() :>> ", linkedList.toArray());
console.log("linkedList.delete(7) :>> ", linkedList.delete(7));
