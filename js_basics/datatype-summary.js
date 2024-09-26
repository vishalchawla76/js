// primitive (call by value)

// datatypes: string,



// non-primitive (call by reference)
// datatypes: array, objects, functions

let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id);
console.log(anotherId);

console.log(id == anotherId);


const fruits = ["banana", "apple", "grapes"]
function func1() {
    console.log("function is running")
}
console.log(typeof fruits);
console.log(typeof fruits);


// *******************types of memories*********************
// STACK(primitive), HEAP(non-primitive)

