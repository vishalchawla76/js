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

let name1 = 'vishal'
let name2 = name1
name2 = 'arun'  // copy of original value given
console.log(name1);
console.log(name2);
// primitive datatypes gives copy to the another variable so when we change variable2 
// original dosent gets affected.
// but when non primitive datatype is used it gives the reference of the original value to variable
// when the variable 2 is changed original value gets changed.

let user1 = {
    email: 'vis@main.com',
    name: 'vishal'
}
let user2 = user1       // original value's reference given
user2.email = "din@main.com"

console.log(user1);
// value gets changed while using non primitive datatypes





