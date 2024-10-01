// singleton
// object literals

const symb = Symbol('var1')
const user = {
    name: "vishal",
    age: "24",
    location: "mumbai",   
    email: "vis@yahoo.com",
    [symb]: "testvalue"
}
 user.email = "ba@yahoo.com"
// Object.freeze(user)
// console.log(user);

user.greetings = function(){
    console.log("hello user");
}
console.log(user.greetings());

user.greetings2 = function(){
    console.log(`hello user ${this.name}`);
}

console.log(user.greetings2())



