// three types of showing output in js
// alert 
// doucment.write()
// doucment.getelementbyid
// console.log

// document.get element by id or class
// document.getElementById('getme').innerHTML = "im full stack developer ";

// document.write
// document.write("waheed hussain");
// document.write("\n", 23+34);

// alert
// alert(23+3);
// alert("waheed")

// console.log
// console.log(23+466);
// console.log("waheed", 23+45,23*35);

// VARIABLES IN JS
// var let const

// declare  automatically variables in js
// also add a value

number = 23,34;
sum = 23 + 34;
console.log(sum);
console.log(typeof sum);
myName = "Waheed Hussain";
console.log(myName);
console.log(typeof myName);


//VAR

// the var keyword should only be used in old borwers
// declare and asign a value
var number = 500;
var number2 = 34;
var sum = number * number2;
console.log(sum);

// new js add let and const

//let
let num = 56;
let num2 = 454;
console.log(num * num2);

// const
const name = "this is my Name (Waheed)";
console.log(name);

// declare mixed variables var let const

const price = 34;
// price = 56; // got error bcz const cnnot change
var  brandName = "book";
brandName = "Big BookCompany" // yu can update the value
let pen = "ballpen";
pen = "pointerPen" // also yu can update the value in let
console.log(price,brandName,pen);

// only declare variable

var carName; // only declare a variable not give a value output is undefined
console.log(carName);

//a declaration can span multiples lines
// one variable different types of data
var myName = "Waheed ",
 lastName = "Hussain",
  caste = "laghari";
  age = 21;
  console.log(myName ,lastName,caste,age);
  // add multiple variables and values seprated by comma

  // re-declaring js variables
//if you re declare variable use var it will not lose its value
// note use var
var myName = "Waheed";
myName;// redeclare but still have a value 
myName = "WAHEED HUSSAIN";// now value is changed bcz its update
console.log(myName);


//you cannot re declared a variable in let and const
//syntax error identifier x is already been declared
// must declare and asign value in let and const

let numbeer = 24; // declare and asign 
// in let yu can update a value
numbeer = 4469;
//but yu cannot redeclare a variable in let
// let numbeer = 35; // redclare is not allow in let and const
console.log(numbeer);


// yu cannot re declared or update value in const
const pricee= 34; 
// pricee = 500; // got error donot update a value
// const pricee = 300; // got error donot re declare a value
console.log(pricee);


// block scope {} means you cannot access value in side the block scope

// var is not block variable

// this is normal declaration
var number = 34;
var number2 = 57;
sum = number + number2;
console.log(sum);

// block scope  declaration in var
{
var age = 22;
namee = "Waheed Hussain";
console.log(namee , age);

}
// access value age and number outside the block scope
console.log(age , namee); // got value 
// var is not a block scope 



// in js let and const are block scope 
// let in block scope
{
// access inside the block scope is allow 
    let key = 224;
    let value = "this is my laptop";
    console.log(key , value);
}
// access from outside the block scope using let 
// console.log(key , value);
// reference error key and value is not defined
// means yu cannot access element outside the block scope



// yu can (re declare variable) in side the block scope in let and const
{

    let key = 224;
    let value = "this is my laptop";
    console.log(key , value);
}


// const in block scope 
//  but re declaring allow in another block in let
// different block scope allow same variable in let and const
{
const bookPrice = 34;
console.log(bookPrice);
}
// access from outside the block scope
// console.log(bookPrice);
// yu cannot access the element outside the block sccpe
// got error bookPrice is not defined

// but yu can re declared a variable in block scope 
{
    const bookPrice = 34;
    console.log(bookPrice);

}


//With let, redeclaring a variable in the same block is NOT allowed
{
// not allowed 
// let x = 7;
// let x = 7;
// console.log(x);

}


let a ; // declare
a = 65; // value asign
console.log(a);

var b ;  // declare 
b = "number"; // value asign
console.log(b);
// getting error bcz when you declare a const you must asign a value
// const ax;
// ax = 34;
// console.log(ax);

// constant array

const cars = ["BMW", "toyota", "volvo","mehran"];
// update element in array using index
console.log(cars);
cars[1]="TOYOTA 2023";
console.log(cars);
// now toyota element change in new toyota2023

cars.push("CD 70");
console.log(cars);
// yu can add element as well


// constant object
const person = {
firstName:"Waheed", 
lastName: "Hussain",
age: 21,
rollNo: "2k21/CSEE/88",
}
console.log(person);
// also change element property as well
person.rollNo = "88 rollNo";
console.log(person);
// also add element as well
person.castee = "Laghari";
console.log(person);

