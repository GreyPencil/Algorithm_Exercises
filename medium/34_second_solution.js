function validStartingCity(distances, fuel, mpg) {
    // Write your code here.
    //O(n) time    O(1) space
    const numberOfcities = distances.length;
    let milesRemaining = 0;

    let indexOfStartingCityCandidate = 0;
    let milesRemainingatStartingCityCandidate = 0;



    for (let cityIdx=1; cityIdx < numberOfcities; cityIdx++){
        const distanceFromPreviousCity = distances[cityIdx-1]
        console.log("distanceFromPreviousCity:", distanceFromPreviousCity)
        const fuelFromPreviousCity = fuel[cityIdx -1]
        console.log("fuelFromPreviousCity:", fuelFromPreviousCity)
        milesRemaining += fuelFromPreviousCity*mpg - distanceFromPreviousCity
        console.log("milesRemaining:", milesRemaining);

        if(milesRemaining < milesRemainingatStartingCityCandidate){
            milesRemainingatStartingCityCandidate = milesRemaining;
            indexOfStartingCityCandidate = cityIdx
        }
        
    } 
    return indexOfStartingCityCandidate;
  }

  distances = [5,25,15,10,15]
  fuel=[1,2,1,0,3]
  mpg = 10

  validStartingCity(distances, fuel, mpg);