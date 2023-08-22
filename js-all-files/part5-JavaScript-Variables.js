// three different ways define a variables in js
// var let const

 //declare variables automstically and also add values
// number = 10;
// number2 = 20;
//  sum = number + number2;
//  console.log(sum);


// the var keyword should only be used in old borwers
// var number = 20;
// var number2 = 30;
// var sum = number -number2;
// console.log(sum);


// new js add let and const

// let number = 20;
// let number2 = 30;
// let sum = number -number2;
// console.log(sum);

// const number = 20;
// const number2 = 30;
// const sum = number -number2;
// console.log(sum);

// declare mixed variables

// const price1 = 10; //const cannot be change 
// const price2 = 40;
// let total = price1 + price2; //but you can change let
// console.log(total);

// var carName;
// // the variable has no value technically it is undefined
// carName = "BMW";
// //assign a value in variable
// console.log(carName);

//a declaration can span multiples lines
// let name = "waheed", lastname = "hussain" ,age = 20;
// console.log(name);
// console.log(lastname);
// console.log(age);
// add multiple variables and values seprated by comma

// re-declaring js variables
//if you re declare variable use var it will not lose its value
var myName = "waheeed"; //value waheed
var myName; //re declared but still have a value
myName = "hussain"; // now value is changed bcz its update 
console.log(myName);