/* 
Given an array of buildings and a direction that all of the buildings face, return an array of the indices of the buildings
that can see the sunset.

A building can see the sunset if it's strictly taller than all of the buildings that come after it in the direction that it faces.

The input array named buildings contains positive, non-zero integers representing the heights of the buildings. A building 
at index i thus has a height denoted by buildings[i]. All of the buildings face the same direction, and this direction is either east or west, denoted by the
input string named direction, which will always be equal to either "EAST" or "WEST". In relation to the input array, you can interpret these directions as right for east and left for west.
*/

function sunsetViews(buildings, direction) {
    // O(n) time  |O(n) space
    const buildingsWithSunsetViews = []

    const startIdx = direction === 'WEST' ? 0: buildings.length-1;
    const step = direction === 'WEST' ? 1 : -1;

    let idx = startIdx;
    let runningMaxHeight = 0;
    while (idx >= 0 && idx < buildings.length){
        const buildingHeight = buildings[idx];

        if(buildingHeight > runningMaxHeight) buildingsWithSunsetViews.push(idx);

        runningMaxHeight = Math.max(runningMaxHeight, buildingHeight);
        idx = idx + step;
    }

    if (direction === 'EAST') buildingsWithSunsetViews.reverse();

    return buildingsWithSunsetViews;
  }