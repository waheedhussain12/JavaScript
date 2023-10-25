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

// inner width and height 
// outer width and height
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);
console.log(window.outerWidth);
// global variable
let win;
// window Open Function
let btn = document.getElementById("open");
btn.addEventListener("click",function(){
    let url = "https://www.google.com";
    // but i want to open new tab in brower use features property
    let features = "width = 200 , height = 200";
    let target = "newtab" // for new window
  win =  window.open(url,target,features);
})

btn.addEventListener("click",function(){

   let url2 =  "https://www.yahoo.com";
  
window.open(url2, "newtab");

})

let btn2 = document.getElementById("open1");
btn2.addEventListener("click",function(){

win.close();
 
 })
 
 // settime out
 let timeOut = setTimeout(timeFun,3000);
 function timeFun(){
    console.log("waheed hussain");

    
 }



 
 // time Interval
 let timeinterval = setInterval(timeintervalFun,1000);
 function timeintervalFun(){
    console.log("waheed hussain");
 }
 let clearBtn2 = document.getElementById("time");
clearBtn2.addEventListener("click",function(){
// pass variable which holds the settimeout function
clearInterval(timeinterval);
 
 })