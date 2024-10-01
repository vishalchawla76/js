const user = {
    username:"vishal",
    id: 12345,
    email:"v@123.com",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
    
}
// this keyword refers to current context
// console.log(user.welcomeMessage());
// user.username = "bb"
// console.log(user.welcomeMessage());


// console.log(this);
// it will print "{}" empty object because there is no context in global scope
// ** if we run same expression "console.log(this)" in browser console it will print window object
// because the engine in the browser has global object window and here in the node enviroment there
// is no context in the global




// function chai(){
//     console.log(this);
    
// }
// chai()

// const chai =() => {
//     let username = "vishalc22"
//     console.log(this.username);
    
// }
// chai()


// const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => ({"name": "vishal"})
console.log(addTwo(1,2));


