/* you're given a non-mpty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, 
but the queries can be executed in any order

A query's waiting time is defined as the amount  of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time
is the duration of the first query; if a query is executed third, then its waiting time is the duration of the first two queries.

Write a function that returns the min amout of total waiting time for all of the queries. For example, if you're fiben the queries of durations [1,4, 5], then the total waiting time if the queries were
executed in [5,1,4], would be 0+5+(5+1) =11.

O(nlogn) time     O(1) space  
 */

function minimumWaitingTime(queries) {
    // Write your code here.
    queries.sort((a,b)=> a -b);
    let time = 0;
    for (let i = 0; i< queries.length; i++){
        let addTime = queries[i];
        let addingTimes = queries.length - i -1;
        time += addTime * addingTimes;
    }
    return time;
  }
  
  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;