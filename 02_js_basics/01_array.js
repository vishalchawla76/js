const array1 = ["sample1", "sample2", "sample3"]
const array2 = ["test1", "test2", "test3"]

// array1.push(array2)
// console.log(array1);

array1.concat(array2)
console.log(array1);


console.log(Array.isArray("string"));
console.log(Array.from("string"));
console.log(Array.from({1: "test"}));


let value1 = 100
let value2 = 200
let value3 = 300

console.log(Array.of(value1, value2, value3));



