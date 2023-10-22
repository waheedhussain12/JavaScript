// BOM 
// the Browser Object Model (BOM) is used to interact with the browser
// the window object represets a window in browser
// an object of window is created automatically by the browser
// All global JavaScript objects, functions , and variables with the var 
// keyword automatically become members of the window object

// Global variables are properties of the window object
// Global functions are methods of the window object

var firstName = "Waheed"; // normal declared
// 1 this is variable
// 2 this is also window' property
// we know that access any property with . notation
// i want to check this is window object's property or not

console.log(window.firstName);
// this is window object

// but let and const are not a window's property
// you got undefined bcz let and const are not a property
let firstName1 = "Waheed"; 
console.log(window.firstName1);

// window is a default object

// check function is a window property or not

function sayMyName(){
    console.log("waheed hussain");
}

// calling function
sayMyName(); // bcz window is a default object automatically understand
// behind the scene is
window.sayMyName();
// here function is a property or method of window 
// so functions , objects and variables with var keywords is all window object's properties

// alert confrim and prompt all are window's method or properties

// window.alert();
// window.prompt();
// window.confirm();
// window.console();

