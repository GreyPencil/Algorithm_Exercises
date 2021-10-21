
/*
You're given three inputs, all of which are instances of an AncestralTree class that have an ancestor property pointing to their youngest ancestor.
The first input is the top ancestor in an ancestral tree (i.e., the only instance that has no ancestor-its ancestor property points to None/null) 
, and the other two inputs are descendants in the ancestral tree.

Write a function that returns the youngest common ancestor to the two descendants.

Note that a descendant is considered its own ancestor. So in the simple ancestral tree below, the youngest common ancestor to nodes A and B is node A.

Sample Input: graph =                               A
                                                /     \
                                             B         C
                                           /   \       /  \ 
                                         D      E     F    G
                                        / \     \
                                       H   I    J

topAncestor = node A
descendantOne = node E
descendanteTwo = node I                                            

Sample Out put: B
 */

// This is an input class. Do not edit.
class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
//   O(D) time      O(1) space
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    // Write your code here.
    const depthOne = getDescendantDepth(descendantOne, topAncestor)
    const depthTwo = getDescendantDepth(descendantTwo, topAncestor)
    if (depthOne > depthTwo){
        return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
    } else {
        return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne)
    }
  }

  function getDescendantDepth(descendant, topAncestor) {
      let depth = 0;
      while (descendant !== topAncestor){
          depth++
          descendant = descendant.ancestor
      }
      return depth;
  }

  function backtrackAncestralTree(lowerDescendant, higherDescendant, diff){
      while (diff > 0) {
          lowerDescendant = lowerDescendant.ancestor
          diff--;
      }
      while (lowerDescendant !== higherDescendant){
          lowerDescendant = lowerDescendant.ancestor
          higherDescendant = higherDescendant.ancestor
      }
      return lowerDescendant;
  }

  
  // Do not edit the lines below.
  exports.AncestralTree = AncestralTree;
  exports.getYoungestCommonAncestor = getYoungestCommonAncestor;

