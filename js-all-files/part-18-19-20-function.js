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

function add() {
  let allnum = arguments.length; // access all upcoming data's length
  console.log(allnum);
  // console.log(arguments[5]); // see all data in Array
  console.log(arguments[5]); // access element using index[]
}

// add(1,34);// first argumnt pass 2 value so Array length is 2
// add(4,76,88); // sec argument pass 3 values soArray length is 3
// add(12,56,88,45,56); // third argument pass 5 values Array so length is 5

add(1, 3, 4, 5, 6, 7);
//access any element using Array index[]

function addTwoNumber() {
  // access argumrnts without parameters
  // using arguments
  if (arguments.length == 0) {
    console.log("No Arguments Passed !");
  } else {
    let sum = 0; // store result
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);
  }
}
// calling function
addTwoNumber(12, 4, 4);
addTwoNumber(14, 4, 4); // same function but values are change
// add multiple arguments as you want

function addThreeNumbers() {
  let getlen = arguments.length;
  // Now length store in getlen

  if (getlen == 0) {
    console.log("No Arguments Passed!");
  } else if (getlen > 0) {
    sum = 0;
    for (let i = 0; i < getlen; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);
  } else {
    console.log("if both conditions are false");
  }
}
// Note you can store a function in variable as well
// rule is cannot use fuction brakets()
let storeFunInVar = addThreeNumbers;
storeFunInVar(3, 2); // function store in variable

// now add values as you want
addThreeNumbers(4, 6, 2, 35, 46, 56, 76, 76, 56);


// return in function
function addd( a,b){
  // also you can make new variable for store data
  let results = a + b;
  // note anything you write in return which in print
  // return 23; // this will print
  // return 23232323;  // this will print
  // if you donot use return program will return undefined
  // return 'waheeed';
  return results;
  // console.log(a + b);
}

// store function's value in variable 
// first function execute than return a value
let sumReturn = addd(10 , 20);
console.log(sumReturn);
// calling function
// addd(10 , 5);


// compare function
function compare(a , b){
if (a > b) {
  return 1;

} else if(b > a){
return -2;
} else{
  return 0;
}
}
// make a variable for store return data and print this variable
let stor;
stor = compare( 7 , 2);
console.log(stor);
 
// Global variable vs local variable
 

let car = 'Audi';
// global variable

function add23(){
   let result = 60; // local variable
   console.log(car); // global variable
   console.log(result);
   // if variable declare inside the function
  // is called local variable
  // you cannot access this variable out of the function
 // in last line local varible is delete from function
 // that why you can declare same variable different functions
}
add23();
// console.log(result);
// reference error result variable not declared

console.log(car); // global variable

function subr(){
  let result = 6034; // local variable
  console.log(result);
  // same variable but different function is allowed

}
// calling function
subr();





































// functions
function playSonog() {
  var play = "Music On";
  var pause = "off";
  if (play == "Music On") {
    console.log("Coke Studio Season 8| Bewajah| Nabeel Shaukat Ali");
  } else if (pause !== "off") {
    console.log("Music is offf");
  } else {
    console.log("brty is low ");
  }
}
// calling function
playSonog();

// function with parameters and argumrnts

function parametersPass(number, number1) {
  var number = 45;
  var number1 = 353;
  result = number + number1;
  // print the result to see output
  console.log(result);
}
// calling function
parametersPass(34, 46);
// also this is the sec way
console.log(result);

function addanythink(add, add2) {
  var add;
  var add2;
  console.log(typeof add);
  console.log(typeof add2);
  console.log(`${add} ${add2}`);
}
addanythink(334, 23);
addanythink("developers", "sindh uni");
