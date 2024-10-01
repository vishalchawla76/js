function callMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// callMyName()
// console.log(typeof "vishal");


function UserLogin(username){
    if(typeof username === "string"){
        console.log("username verified")
        return username+" logged in"  
     }
    else{
        console.log("invalid username");
        return username+"not logged in"
    }
}
// UserLogin("vishal")


function CalculatePrice(val1,val2,...num1){
    // spread and rest operatord used in parameter => ...num1
    res = "val1: "+val1 +"\nval2: "+val2+"\nnum1: "+num1
    return res
}

console.log(CalculatePrice(100,200,300,500,2000));

// this is also the type of function declaration
const addtwo = function(num3){
    return num3 + 2
}
console.log(addtwo(4));



