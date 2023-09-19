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
function multiTable(){
    for(i = 1; i <= 10; i++){
        console.log(`2 x ${i} = ${2*i} ${i/2}`);
    
    }

}
// call function
// print this table 100h 1000th time 
// simply call this function
multiTable();
multiTable();

// function say my name
function sayMyName(){
// this is simple function
var name = 'waheed hussain';
console.log(name);

}

// calling Function
sayMyName();
sayMyName();
sayMyName();
sayMyName();

function carPorperties(){

var car ={
    carColr:'red',
    carEngin:"bmw's\ Engin",
    carSpeed:"344km-hr",
    carPrice:'232423RS',
    carCompany:'BMW'}
    console.log(car);

    } 
// Calling this function
carPorperties();
carPorperties();
