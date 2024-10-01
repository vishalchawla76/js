// immediately invoked function expressions (IIFE)
//  avoiding global scope pollution and invoked immediately
// needs to define function in parenthesis and and 2nd parenthesis is for call immediately

// ***************always needs to end with semicolon ;**********************

(function newfunc(){
    console.log("DB CONNECTION SUCCESSFUL");
    
})();

( newfunc2 = () => {
    console.log("DB CONNECTION SUCCESSFUL 2");
})();


