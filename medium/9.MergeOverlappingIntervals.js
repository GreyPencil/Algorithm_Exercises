/* 
non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

interval is an array of two integers, with interval[0] as the start of the interval and interval[1] as the end

note that backtoback itnervals aren't considered to be overlapping. For example, [1,5,] and [6,7] aren't overlapping; [1,6] [6,7 are indeed overlapping]

sample input: "intervals": [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
  ]
  sample output: "intervals": [
    [1, 2],
    [3, 8],
    [9, 10]
  ]

  O(nlogn) time  O(n)space
*/
function mergeOverlappingIntervals(intervals) {
    // Write your code here.
    const sortedIntervals = intervals.sort((a,b) => a[0] -b[0]);

    const mergedIntervals = [];
    let currentInterval = sortedIntervals[0];
    mergedIntervals.push(currentInterval);

    for(const nextInterval of sortedIntervals) {
      const [_, currentIntervalEnd] = currentInterval;
      // _ could be anything: currentIntervalStart
      console.log(currentInterval);
      const[nextIntervalStart, nextIntervalEnd] = nextInterval;
      if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
      else {
        currentInterval = nextInterval;
        mergedIntervals.push(currentInterval);
      }
    }
    console.log(mergedIntervals);
    return mergedIntervals;
    
  }

  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
  ]);