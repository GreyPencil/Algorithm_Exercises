/* 
Write a function that takes in a Binary Tree (where nodes have an additional pointer to their parent node)
as well as a node contained in that tree and returns the given node's successor.

A node's successor is the next node to be bisited (immediately after the given node) when traversing its tree using the in_order tree-traversal techinique.
A node has no successor if it's the last node to be visited in the in-order traversal.

If a node has no successor, your function should return None/null.

Each BinaryTree node has an integer value, a parent node, a left child node, and a righ child node. 
Children nodes can either be BinaryTree nodes themselves or None/null.

*/