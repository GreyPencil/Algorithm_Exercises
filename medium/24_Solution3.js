function numberOfWaysToTraverseGraph(width, height) {
    // O(n+m) time       O(1)space
    const x = width -1;
    const y = height -1;

    const numerator = factorial (x + y);
    const denominator = factorial(x)*factorial(y)

    // return Math.floor(numerator/denominator)
    return numerator/denominator
  }

function factorial(num){
    let result =1;
    for (let n =2; n<num+1; n++){
        result *=n;
    }
    return result;
}