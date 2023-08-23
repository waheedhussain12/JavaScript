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

// let x = 10;
// let x = 20;
// console.log(x); 
//you cannot re declared a variable in let and const
//syntax error identifier x is already been declared


// block scope {} means you cannot access value 
// var is not block variable
var x = 10;
console.log(x);

{
    var x = 20; // block scope 
}
// trying to access outside the block scope
// accessed the value outside the block scope 
// means var keyword is not working in block scope
console.log(x);

// let and const are block scope variables you cannot access outside the block scope

let y = 30;
console.log(y);
// normal declaring a variable let

// block scope using let
{
    let z = 30;
    console.log(z);
    //you can access block variable inside the block only

}

// block scope in let trying to access outside the block
{
    let mylastName = "hussain"; // declare variable inside in block
console.log(mylastName);
}

//trying to access outside the block scope
// getting error mylastName is not defined
// console.log(mylastName);

// block scope usng const
{
    const change = " iam not changing bcz im const ";
    console.log(change);
}
// getting same error 
// console.log(change);


//re declare var
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3

//With let, redeclaring a variable in the same block is NOT allowed
// var num = 10;
// let num = 3; 
//num is already declared


// in block scope
// {
//      let x = 10;
//      let x = 29; // not allowed
//      console.log(x);
// }

// {
// let x = 30;
// // bcz let dose not re decleare
// var x = 4;

// console.log(x);
// }

// {
//     var x = 30;
//     var x  = 40;
//     console.log(x);
//     // var is redeclared variable
// }

//  but re declaring allow in another block in let
// different block scope allow same variable in let
{
    let num = 30;
    console.log(num);
}
{
    let num = 30;
    console.log(num);
}
{
    let num = 30;
    console.log(num);
}


// const pi; // declare
// pi = 34.23232; // asigned value
// getting error bcz when you declare a const you must asign a value

const pi = 23.2323;
console.log(pi);
// this is right way

// constant array
const cars = ["BMW", "toyota", "volvo","mehran"];
console.log(cars);
// you can change element as well
cars[1]= "new toyota2032";
// now toyota element change in new toyota2023
console.log(cars);

// also you can add element
cars.push("audi");
console.log(cars);

// but you can not reasign a array

// const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR

// constant object
const car = {
    modle:"2012",color:"green",use:"12 years"
};
console.log(car);
// you can change a property
car.color = "black";
console.log(car);
// you can add a property
car.owner = "waheed";
console.log(car);

//  But you can NOT reassign the object:

// const car = {type:"Fiat", model:"500", color:"white"};

// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR