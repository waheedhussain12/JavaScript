// two types of function in js
// pre-define
// user-define

// pre define
// alert();
// console.log();
// document.write()

// user define
// table of 2

// for(i = 1; i <= 10; i++){
//     console.log(`2 x ${i} = ${2*i} ${i/2}`);
// without function
// }

// function Syntax
/*
function FunctionName() block scope{}
function myfun(){
this is simple function

}
*/

// make a function
function multiTable() {
  for (i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2 * i} ${i / 2}`);
  }
}
// call function
// print this table 100h 1000th time
// simply call this function
multiTable();
multiTable();

// function say my name
function sayMyName() {
  // this is simple function
  var name = "waheed hussain";
  console.log(name);
}

// calling Function
sayMyName();
sayMyName();
sayMyName();
sayMyName();

function carPorperties() {
  var car = {
    carColr: "red",
    carEngin: "bmw's Engin",
    carSpeed: "344km-hr",
    carPrice: "232423RS",
    carCompany: "BMW",
  };
  console.log(car);
}
// Calling this function
carPorperties();
carPorperties();

// Parameters and Arguments

// parameters are like => Variables
// arguments  are like => Values

// without parameters and arguments
function addTwoNumber() {
  var num1 = 34;
  var num2 = 56;
  result = num1 + num2;
  console.log(result);
}
// calling function
addTwoNumber();

// with parameters and arguments
function multiTable2(table1) {
  for (var i = 1; i <= 10; i++) {
    console.log(`2 x ${table1} = ${table1 * i} ${table1 / i}`);
  }
}
// calling function
multiTable2(3);
multiTable2(23);

function addThreeNumber(num1, num2, num3) {
  // functions with parameters
  var result = num1 + num2 + num3;
  console.log(result);
}
// calling functions
addThreeNumber(1, 2, 3);
// these 1 2 3 are arguments
// same function but values are change with the help of arguments
addThreeNumber(4, 6, 10);

function myName(name) {
  for (i = 0; i <= 10; i++) {
    if (i == 3) {
      // check condition
      console.log(name, "yes 3 is right number", i);
    }
    console.log(name, i);
  }
}
// calling function
myName("Waheed");
myName("Hussain");


// the Arguments Objects









// functions 
function playSonog(){
var play = 'Music On';
var pause = "off";
if (play =='Music On') {
console.log('Coke Studio Season 8| Bewajah| Nabeel Shaukat Ali');  
}else if(pause !== 'off'){
  console.log('Music is offf');
}else{
  console.log('brty is low ');
}
}
// calling function
playSonog();

// function with parameters and argumrnts

function parametersPass(number , number1){
var number = 45;
var number1 = 353;
result = number + number1;
// print the result to see output
console.log(result);

}
// calling function
parametersPass(34,46);
// also this is the sec way
console.log(result);
