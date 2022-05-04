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

  removeHead() {
    const removedHead = this.head;
    //check the list has a head.
    if (removedHead === null) {
      // There is nothing to return.
      //  End of the method execution
      return;
    }
    // remove it by setting the list’s head equal to the original head’s next node, and then return that original head.
    this.head = this.head.getNextNode();
    // return the removed linked list Head data
    return removedHead.data;
  }
}

module.exports = LinkedList;
