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
let use;
use = 23;
console.log(use);

// different types of data  types are allow seprate by comma
let person1 = "waheed ali", age1 = 23, caste1 ="leghari";
console.log(person1,age1,caste1);

// let support block scope

{
    let number = 23;
    let number1 = 45;
    let result = number + number1;
    console.log(result);
}
// access outside of the block scope
// console.log(result); // got error cannot access outside of the block scope

// let donot support re asign variable
let reuse = 34;
// let reuse = 220; // got error indentifer reuse already decalred
console.log(reuse);

// but you can update value
let updateMe = 66;
updateMe = "66 to srting text value is update ";
console.log(updateMe);

// you can use same variable in different block scopes

{
    let reuse = "re use variable in let another block ";
    // let reuse = " got error if use same variable in inside the block";
    // gettng error bcz variable already declared
    let use_me = " got error if use same variable in inside the block";
    console.log(reuse,use_me);
}
// an other block allowed
{
    let reuse = "re use but another block scope ";
    let use_me = " same variables but another block scope";
    console.log(reuse,use_me);
}

// declared mixx variables
const company = "Lays";
let laysColr = "yellow";
var laysPrice = "20Rs";
var laysPrice = "30Rs Now Price Is Updated"
console.log(company,laysColr,laysPrice);

// const variable

// onces a value is assigned value cannt be changed
const canNotChange = "const cannot be change";
// canNotChange ="value update"; // const value cannot be update 
console.log(canNotChange);

// but yu can declared same variables in different block scope in const

{
    const samevar = "same variable in differnt blocks ";
    console.log(samevar);
}
{
    const samevar = "same variable in differnt blocks ";
    const samevar1 = "same variable another block"
    console.log(samevar);
    console.log(samevar1);
}

//  constant array
let arr = ["waheed",23,"leghari"];
console.log(arr);
// yu can change value 
arr[1] = 21;
// value update
console.log(arr);
// you can also add value
arr.push = "computer science";
console.log(arr);
//  but yu cannot re asign variable like
// let arr = ["1224",23,"abc"];
// console.log(arr);
// goterror arr is already taken

// constant object

let obj = {
    CompanyLays : "lAYS", 
    PriceLays : 60,
     laysColor : "red",
      laysFlvr : "flamin hot"};
    console.log(obj);
    // also yu can add property in element
    obj.laysColor = "now color is updated red to yellow";
    console.log(obj);
    // also add a element
    obj.addFlvr = " hot marchii ";
    console.log(obj);

    // but yu cannot re assign a obj


    // operators

    a = 12;
    b = 34;
    console.log(a+b);
    b = 45;
    b1 = 355;
    console.log(b-b1);
    b = 45;
    b1 = 355;
    console.log(b*b1);

    b = 45;
    b1 = 355;
    console.log(b/b1);
    b = 45;
    b1 = 355;
    console.log(b%b1);

    b = 45;
    b1 = 35;
    console.log(b**b1);
    