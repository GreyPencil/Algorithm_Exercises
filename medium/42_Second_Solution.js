function staircaseTraversal(height, maxSteps) {
    // O(n *k) time | O(n) space
    return numberOfWaysToTop(height, maxSteps, {0:1,1:1});
  }

  function numberOfWaysToTop(height, maxSteps, memoize){
    if (height in memoize) return memoize[height];

    let numberOfWays = 0;
    for (let step =1; step<Math.min(maxSteps, height) + 1; step++){
      numberOfWays += numberOfWaysToTop(height -step, maxSteps, memoize)

    }
    memoize[height] = numberOfWays
    return numberOfWays;
  }