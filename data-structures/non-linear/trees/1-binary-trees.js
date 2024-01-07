// class BinaryTree data structure
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // insert a new node into the tree
  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BinaryTree(value);
      else this.left.insert(value);
    } else {
      if (!this.right) this.right = new BinaryTree(value);
      else this.right.insert(value);
    }
  }
  // check if a value is in the tree
  contains(value) {
    if (value === this.value) return true;
    if (value < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else {
      if (!this.right) return false;
      else return this.right.contains(value);
    }
  }
  // depth-first traversal
  depthFirstTraversal() {
    if (this.left) this.left.depthFirstTraversal();
    console.log(this.value);
    if (this.right) this.right.depthFirstTraversal();
  }
  // breadth-first traversal
  breadthFirstTraversal() {
    const queue = [this];
    while (queue.length) {
      const treeNode = queue.shift();
      console.log(treeNode.value);
      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
  }
  // get the minimum value in the tree
  getMinValue() {
    if (this.left) return this.left.getMinValue();
    else return this.value;
  }
  // get the maximum value in the tree
  getMaxValue() {
    if (this.right) return this.right.getMaxValue();
    else return this.value;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = new BinaryTree(value);
  }

  // insert a new node into the tree
  insert(value) {
    this.root.insert(value);
  }
  // check if a value is in the tree
  contains(value) {
    return this.root.contains(value);
  }
  // depth-first traversal
  depthFirstTraversal() {
    this.root.depthFirstTraversal();
  }
  // breadth-first traversal
  breadthFirstTraversal() {
    this.root.breadthFirstTraversal();
  }
  // get the minimum value in the tree
  getMinValue() {
    return this.root.getMinValue();
  }
  // get the maximum value in the tree
  getMaxValue() {
    return this.root.getMaxValue();
  }
}

class AVLTree {
  constructor(value) {
    this.root = new BinaryTree(value);
  }

  // insert a new node into the tree
  insert(value) {
    this.root.insert(value);
  }
  // check if a value is in the tree
  contains(value) {
    return this.root.contains(value);
  }
  // depth-first traversal
  depthFirstTraversal() {
    this.root.depthFirstTraversal();
  }
  // breadth-first traversal
  breadthFirstTraversal() {
    this.root.breadthFirstTraversal();
  }
  // get the minimum value in the tree
  getMinValue() {
    return this.root.getMinValue();
  }
  // get the maximum value in the tree
  getMaxValue() {
    return this.root.getMaxValue();
  }
}

class TrieTree {
  constructor() {
    this.root = new TrieNode("");
  }

  // insert a new node into the tree
  insert(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!currentNode.children[word[i]]) {
        currentNode.children[word[i]] = new TrieNode(word[i]);
      }
      currentNode = currentNode.children[word[i]];
    }
    currentNode.isWord = true;
  }
  // check if a word is in the tree
  contains(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!currentNode.children[word[i]]) return false;
      currentNode = currentNode.children[word[i]];
    }
    return currentNode.isWord;
  }
}

class HeapTree {
  constructor() {
    this.heap = [null];
  }

  // insert a new node into the tree
  insert(value) {
    this.heap.push(value);
    if (this.heap.length > 2) {
      let index = this.heap.length - 1;
      while (this.heap[index] > this.heap[Math.floor(index / 2)]) {
        if (index >= 1) {
          [this.heap[Math.floor(index / 2)], this.heap[index]] = [
            this.heap[index],
            this.heap[Math.floor(index / 2)],
          ];
          if (Math.floor(index / 2) > 1) index = Math.floor(index / 2);
          else break;
        }
      }
    }
  }
  // check if a value is in the tree
  contains(value) {
    return this.heap.includes(value);
  }
  // depth-first traversal
  depthFirstTraversal() {
    for (let i = 1; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }
  // breadth-first traversal
  breadthFirstTraversal() {
    for (let i = 1; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }
  // get the minimum value in the tree
  getMinValue() {
    return this.heap[1];
  }
  // get the maximum value in the tree
  getMaxValue() {
    return this.heap[this.heap.length - 1];
  }
}
