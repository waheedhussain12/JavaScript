// with declared var variables window property consider

// normal declare 
var num = 12;
console.log(num);
// but this is also window's object
console.log(window.num);

// functions and objects
function myName(){
    console.log('this is function');
}

// check function is window' property or not
myName(); // normal
window.myName(); // means function is window's property

// alert confrim and prompt all are window's method or properties

// window.alert();
// window.prompt();
// window.confirm();
// window.console();

// 1 window

