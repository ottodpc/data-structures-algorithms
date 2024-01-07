// depth first search (DFS) is a graph traversal algorithm that explores vertices in the order of their distance from the root node, where distance is the minimum length of a path from the root node to the vertex.
// Time complexity: O(n)
// Space complexity: O(n)
function dfs(graph, root) {
  let nodesLen = {};
  for (let i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;
  let stack = [root];
  let current;
  while (stack.length !== 0) {
    current = stack.pop();
    let curConnected = graph[current];
    let neighborIdx = [];
    let idx = curConnected.indexOf(1);
    while (idx !== -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }
    for (let j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] === Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        stack.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

let exDFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log("dfs(exDFSGraph, 1) :>> ", dfs(exDFSGraph, 1));

// in order dfs
// Time complexity: O(n)
// Space complexity: O(n)
function inOrderDFS(tree, root) {
  if (root === null) return;
  inOrderDFS(tree, root.left);
  console.log("root.value :>> ", root.value);
  inOrderDFS(tree, root.right);
}

// pre order dfs: usefull for making deep copies of a tree
// Time complexity: O(n)
// Space complexity: O(n)
function preOrderDFS(tree, root) {
  if (root === null) return;
  console.log("root.value :>> ", root.value);
  preOrderDFS(tree, root.left);
  preOrderDFS(tree, root.right);
}

// post order dfs: usefull for deleting a tree
// Time complexity: O(n)
// Space complexity: O(n)
function postOrderDFS(tree, root) {
  if (root === null) return;
  postOrderDFS(tree, root.left);
  postOrderDFS(tree, root.right);
  console.log("root.value :>> ", root.value);
}

const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 10,
    left: null,
    right: {
      value: 20,
      left: null,
      right: null,
    },
  },
};

console.log("inOrderDFS(tree, tree) :>> ", inOrderDFS(tree, tree));
console.log("preOrderDFS(tree, tree) :>> ", preOrderDFS(tree, tree));
console.log("postOrderDFS(tree, tree) :>> ", postOrderDFS(tree, tree));
