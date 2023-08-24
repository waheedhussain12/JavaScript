// different types of outputs in js
// alert('hy waheed');
// console.log("waheed hussain");
// document.write("hussain");

// access element through id

// document.getElementById("getme").innerHTML = " html id now in javascript page";

// variables var let const
var num; // declare
num = 12; // value assign
console.log(num);

var num1 = 34;
num1 = "waheed"; // value update
var num1 = 23; // value update in same variable
console.log(num1);

var  person = "waheed hussain", age = 23, caste = "laghari";
// different datatypes in one var
console.log(person,age,caste);


//  var is not a block scope bcz yu can access outside of  the block scope

{
var num2 = 55;
var num3 = 20;
var z = num2 + num3;
// console.log(z); 
}
// can we access from here outside of the block scope
console.log(z); // yes output is 75 so var is not a block scope

// automaticaly declare variable in js

auto = "yes iam auto";
auto1 = 100;
auto3 = auto + auto1;
console.log(auto3);
// 100 number convert in string 

// let