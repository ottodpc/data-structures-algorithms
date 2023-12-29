class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  // O(1)
  append(value) {
    const newNode = { value, next: null };
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
      const newNode = { value, next: existingNode.next };
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
  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deletedItem = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedItem;
  }

  // O(1)
  deleteTail() {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    let curNode = this.head;
    while (curNode.next) {
      if (!curNode.next.next) {
        curNode.next = null;
      } else {
        curNode = curNode.next;
      }
    }
    this.tail = curNode;
    return deletedTail;
  }
}

const linkedList1 = new SingleLinkedList();
linkedList1.append(1);
linkedList1.append("my");
linkedList1.append(3);
linkedList1.append("name");
linkedList1.append("is");
linkedList1.append("Cyprien");
linkedList1.append("and");
linkedList1.append("I");
linkedList1.append("am");
linkedList1.append("a");
linkedList1.append("developer");
linkedList1.append("!");
linkedList1.prepend("Hi");
linkedList1.delete("my");
linkedList1.delete("!");

console.log("linkedList1 :>> ", linkedList1);
console.log("linkedList1.find(3) :>> ", linkedList1.find(3));
console.log("linkedList1.find(4) :>> ", linkedList1.find(4));
console.log("linkedList1.deleteHead() :>> ", linkedList1.deleteHead());
console.log("linkedList1.deleteTail() :>> ", linkedList1.deleteTail());
console.log("linkedList1 :>> ", linkedList1);
console.log("linkedList1.deleteTail() :>> ", linkedList1.deleteTail());
