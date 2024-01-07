AlgoRythmics from dance to code: https://www.youtube.com/user/AlgoRythmics/videos?themeRefresh=1

What is the time and space complexity of a breadth first and depth first tree traversal?: https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr

BFS: good for shortest path, closer nodes. (-: more memory )
DDFS: less memory, good for question does path exist. (-: can be slow)
use case:
//If you know a solution is not far from the root of the tree:
BFS

//If the tree is very deep and solutions are rare:
BFS - DFS will be slower

//If the tree is very wide:
DFS - BFS will need too much memory, in a queue

//If solutions are frequent but located deep in the tree:
DFS

//Determining whether a path exists between two nodes:
DFS

//Finding the shortest path:
BFS
