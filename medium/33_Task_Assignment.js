/* 
You're given an integer k representing a number of workers and an array of positive integers representing durations of tasks that
must be completed by the workers. Specifically, each worker must complete two unique tasks and can only work on one task at a time.
the number of tasks will always be equal to 2k such that each worker always has exactly two tasks to complete. All tasks are
independent of one another and can be completed in any order. Workers will complete their assigned tasks in parallel, and the time
taken to complete all tasks will be equal to the time taken to complete the longest pair of tasks 

Write a function that returns the optimal assignment of tasks to each worker such taht the tasks are completed as fast as possible. Your
function should return a list of pairs, where each pair stores the indices of the tasks that should be completed by one worker. the pairs
should be in the following format: [task1, task2], where the order of task1 and task2 doesn't matter. Your function can 
return the pairs in any order. If multiple optimal assignments exsist, any correct answer will be accepted.

Note: you will slways be given at least one worker(k>0)

Sample input:
k =3,
tasks = [1,3,5,3,1,4]
Sample output:
[
    [0,2], // tasks[0] =1, tasks[2] =5  | 1+5=6
    [4,5], // tasks[4] =1, tasks[5] =4  | 1+4=5
    [1,3], // tasks[1] =3, tasks[3] =3  | 3+3=6
]

Note: there are multiple correct answers for this sample input:
[
   [2,4], 
   [0,5], 
   [1,3], 
]
*/

function taskAssignment(k, tasks) {
    // Write your code here.
    // O(nlogn) time | O(n) space
    const pairedTasks = [];
    const taskDurationToIndices = getTaskDurationToIndices(tasks)

    const sortedTasks =[...tasks].sort((a,b)=>a-b);
    console.log("sortedTasks:", sortedTasks);

    for (let idx = 0; idx < k; idx++){
        const task1Duration = sortedTasks[idx]
        const indicesWithtask1Duration = taskDurationToIndices[task1Duration]
        const task1Index = indicesWithtask1Duration.pop()

        const task2SortedIndex = tasks.length-1-idx;
        const task2Duration = sortedTasks[task2SortedIndex]
        const indicesWithtask2Duration = taskDurationToIndices[task2Duration]
        const tasks2Index = indicesWithtask2Duration.pop()

        pairedTasks.push([task1Index, tasks2Index])

    }
    return pairedTasks;
  }

function getTaskDurationToIndices(tasks) {
    const taskDurationToIndices = {}
    for (let idx = 0; idx < tasks.length; idx++) {
        const taskDuration = tasks[idx]
        console.log("taskduration: ",taskDuration)
        if (taskDuration in taskDurationToIndices){
            taskDurationToIndices[taskDuration].push(idx);
        }else {
            taskDurationToIndices[taskDuration] = [idx]
        }
    }
    console.log("taskDurationToIndices: ", taskDurationToIndices)
    return taskDurationToIndices;
}
  
  // Do not edit the line below.
  exports.taskAssignment = taskAssignment;

  array = [1,3,3,4,6, 5]

//   getTaskDurationToIndices(array);

  const taskDurationToIndices = getTaskDurationToIndices(array)

  console.log("last : ",taskDurationToIndices)

  const sortedTasks =[...array].sort((a,b)=>a-b);
  console.log("sortedTasks:", sortedTasks);
  