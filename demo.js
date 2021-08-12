function equar(a, b) {
    // 判断数组的长度
    if (a.length !== b.length) {
        return false
    } else {
        // 循环遍历数组的值进行比较
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}

// let array = [1,2,4,3,3,5,7,5,7];
// let array1 = [];
// let array2 = [];
// for (let i = 0; i < array.length; i++){
//     array1.push(array[i]);
//     array2.push(array[i]);
// }
// console.log("array1:", array1);
// console.log("array2:", array2);

// array1.sort((a,b)=>a-b);
// array2.sort((a,b)=>b-a);
// console.log("array1:", array1);
// console.log("array2:", array2);

// const score = {current: 0, previous: 1};
// const score1 = {[current]: 0};

// console.log(score);
// console.log(score.current);
// console.log(score.previous);
// console.log(score1[current]);

// var a = [1,2]
// a[5] = 3;
// console.log(a.length)

// const foo = {
//     bar(){
//         console.log(1)
//     },
//     name: "alber",
//     age: 26,
// }

// console.log("foo")
// setTimeout(()=>{
//     console.log("love")
// },0);
// console.log("3")

// var v =1;
// var f1 = function(){
//     console.log(v)
// }
// var f2 = function(){
//     var v = 2;
//     f1();
// }
// f2();

// class X {
//     get Y() { return 42;}
// }
// var x = new X();

// x.Y

const foo = [1,2,3]
const [n] = foo;
// var b = (a = 3 ) ? true: false;
console.log(n)