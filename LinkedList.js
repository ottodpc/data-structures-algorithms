const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  addToHead(data) {
    const newHead = new Node(data);

    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    // Initialy tail is equal to the head of the list
    let tail = this.head;
    // check if it has any value
    if (tail === null) {
      // If tail has no value, then that means the list was empty
      const newHead = new Node(data);
      this.head = newHead; // creating the list’s head
    }
    // does tail have a value ? if so,  that means the list is not empty.
    else {
      // setting the tail pointer
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      // setting the next node tail
      const newHead = new Node(data);
      tail.setNextNode(newHead);
    }
  }
}

module.exports = LinkedList;
