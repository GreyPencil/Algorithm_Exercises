function staircaseTraversal(height, maxSteps) {
    // O n time  O n space
    let currentNumberOfWays = 0;
    const waysToTop = [1];

    for (let currentHeight =1; currentHeight< height+1; currentHeight++){
        const startOfWindow = currentHeight -maxSteps -1;
        const endOfWindow = currentHeight -1;
        if (startOfWindow >= 0) currentNumberOfWays -= waysToTop[startOfWindow]

        currentNumberOfWays += waysToTop[endOfWindow]
        waysToTop.push(currentNumberOfWays)
    }

    return waysToTop[height];
  }
  

  let result = staircaseTraversal(5,3);
  console.log(result)