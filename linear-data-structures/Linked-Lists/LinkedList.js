const Node = require('./Node');

// SECTION LinkedList data structure
// NOTE Implementing a LinkedList class to handle external operations on the list, like adding and removing nodes
class LinkedList {
  constructor() {
    this.head = null;
  }
  // NOTE Method that adds a node to the head of the list
  addToHead(data) {
    const newHead = new Node(data);

    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
  // NOTE Method that adds a node to the tail of the list
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
  // NOTE Method that removes the head of the list
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

  printList() {
    let currentNode = this.head;
    let output = '<head> ';

    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = LinkedList;
