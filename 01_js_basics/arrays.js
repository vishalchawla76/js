const my_array = [1, 2, 3, 4, 5]
console.log(my_array);
console.log(my_array.push(7));
console.log(my_array.pop(2));
console.log(my_array.unshift(0));  // inserts new elements at the start of an array, and returns the new length of the array.
console.log(my_array);
console.log(my_array.includes(7));
console.log(my_array.indexOf(3));


// slice, splice

console.log("A:", my_array);

const myn1 = my_array.slice(1,3)
console.log(myn1);
console.log(my_array);

console.log("B:", my_array);
const myn2 = my_array.splice(1,3)
console.log(myn2);

console.log(my_array);


