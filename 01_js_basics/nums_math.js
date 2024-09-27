const num1 = 100
const num2 = new Number(100)
console.log(num1,num2);
console.log(num1.toFixed(2)); //Number of digits after the decimal point. Must be in the range 0

const another_num = 10.73635
console.log(another_num.toPrecision());
const num3 = 100000000
console.log(num3.toLocaleString('en-IN')); //Converts a number to a string by using the current or specified locale.



//************************MATHS*************************** */

console.log(Math.round(Math.random()*10));
const max = 100
const min = 10
console.log(Math.floor(Math.random()*(max - min) + 1))
