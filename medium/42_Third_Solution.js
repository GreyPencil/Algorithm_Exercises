function staircaseTraversal(height, maxSteps) {
    // O(n *k) time | O(n) space
    const waysToTop = new Array(height+1).fill(0)
    waysToTop[0] = 1;
    waysToTop[1] = 1;

    for (let currentHeight =2; currentHeight < height +1; currentHeight++){
        let step =1;
        while (step <= maxSteps && step <= currentHeight){
            waysToTop[currentHeight] = waysToTop[currentHeight]+waysToTop[currentHeight-step]
            step++
        }
    }
    return waysToTop[height]
  }
  
  // Do not edit the line below.
  exports.staircaseTraversal = staircaseTraversal;