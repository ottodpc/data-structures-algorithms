// class graph data structure
class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  // add a node to the graph
  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  // add an edge between two nodes in the graph
  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  // remove an edge between two nodes in the graph
  removeEdge(node1, node2) {
    this.adjacencyList[node1] = this.adjacencyList[node1].filter(
      (node) => node !== node2
    );
    this.adjacencyList[node2] = this.adjacencyList[node2].filter(
      (node) => node !== node1
    );
  }

  // remove a node from the graph
  removeNode(node) {
    this.nodes = this.nodes.filter((n) => n !== node);
    while (this.adjacencyList[node].length) {
      const adjacentNode = this.adjacencyList[node].pop();
      this.removeEdge(node, adjacentNode);
    }
  }

  // depth-first traversal
  depthFirstTraversal(startingNode) {
    const stack = [startingNode];
    const visited = {};
    while (stack.length) {
      const currentNode = stack.pop();
      visited[currentNode] = true;
      console.log(currentNode);
      this.adjacencyList[currentNode].forEach((node) => {
        if (!visited[node]) stack.push(node);
      });
    }
  }

  // breadth-first traversal
  breadthFirstTraversal(startingNode) {
    const queue = [startingNode];
    const visited = {};
    while (queue.length) {
      const currentNode = queue.shift();
      visited[currentNode] = true;
      console.log(currentNode);
      this.adjacencyList[currentNode].forEach((node) => {
        if (!visited[node]) queue.push(node);
      });
    }
  }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

graph.depthFirstTraversal("A");
graph.breadthFirstTraversal("A");

console.log("graph :>> ", graph);
