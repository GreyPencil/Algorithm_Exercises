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

let array = [1,2,4,3,3,5,7,5,7];
let array1 = [];
let array2 = [];
for (let i = 0; i < array.length; i++){
    array1.push(array[i]);
    array2.push(array[i]);
}
console.log("array1:", array1);
console.log("array2:", array2);

array1.sort((a,b)=>a-b);
array2.sort((a,b)=>b-a);
console.log("array1:", array1);
console.log("array2:", array2);
