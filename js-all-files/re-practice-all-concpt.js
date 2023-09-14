// three types of showing output in js
// alert 
// doucment.write()
// doucment.getelementbyid
// console.log

// document.get element by id or class
// document.getElementById('getme').innerHTML = "im full stack developer ";

// document.write
// document.write("waheed hussain");
// document.write("\n", 25+34);

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

let book3;
console.log(book3);
// undefined bcz value not asign

// part 6 js operators

// addition
var onenumber = 23;
var twonumber = 46;
sum = onenumber + twonumber;
console.log(sum);

// sub
var onenumber = 23;
var twonumber = 46;
sum = onenumber - twonumber;
console.log(sum);

// divide
var onenumber = 23;
var twonumber = 46;
sum = onenumber / twonumber;
console.log(sum);

// remider
var onenumber = 23;
var twonumber = 46;
sum = onenumber % twonumber;
console.log(sum);

// multiple
var onenumber = 23;
var twonumber = 46;
sum = onenumber * twonumber;
console.log(sum);


var onenumber = 23;
sum = onenumber **4;
console.log(sum);

// addition btw number and string

var n = 23;
var str = "apple";
sum = n + str;
console.log(sum);
// number convert in string

var fName = "waheed";
var lName = "hussain";
console.log(fName+" "+lName);

// incremnt 
var incressNum = 10;
incressNum++;
incressNum++;
console.log(incressNum);

// decremnt
var incressNum = 10;
incressNum--;
incressNum--;
console.log(incressNum);


// Data type in JS
// String
var str = "Waheedlaptop";
console.log(str);
str = "Waheed'laptop";
console.log(str);

str = 'waheed"laptop';
console.log(str);

str = "Waheed\"laptop";
console.log(str);

str = "Waheed\'laptop";
console.log(str);

// number 
// two types of number 
var n = 343;
console.log(n);
var n1 = 343.3;
console.log(n1);

// boolean
var grateNum = 35;
var lessNum = 21;
console.log(grateNum == lessNum);
// condition check

// Array 

let arr = ["hy",23,"waheed",34.34];
console.log(arr);

// object 
let obj = {
    key: 2324352, 
    value: "2414RS",
}
console.log(obj);

// undefined
let deff; // declare
// value not asign 
console.log(deff);
let def;
def = "";
console.log(def);

// Comparison and logical operators


// == equal to 
// not compare data type 
// 5 == 5 -> true
// 6 == 5 -> false
// 5 == "5" -> true

var number = 35;
var number2 = 67;
var compNumber = number == number2;
console.log(compNumber);
// result is false bcz 35 and 67 is not equal
var equlNumber = 20;
var equlNumber2 = 20;
compNumber = equlNumber == equlNumber2;
console.log(compNumber);
// result true bcz both are equal 20 and 20

var number3 = 13;
var strName = "5";
console.log(number3==strName);
// first convert in string than compare
// here "5" string convert in number than compare
// output false 5 and 13 not equal

var number3 = 5;
var strName = "5";
console.log(number3==strName);
// result true 5 and 5 is equal
// first str convrt than compare

var number3 = "5";
var strName = "5";
console.log(number3==strName);
// first convert both than compare


// === equal value and equal type
// 5 === 5 -> true
// 6 === 5 -> false
// 5 === "5" -> false bcz change data type
var number = 50;
var number1 = 50;
result = number === number1;
console.log(result);
// true bcz both numbers type Same and value is equal 50 50
var number2 = 50;
var number3 = 60;
result = number2 === number3;
console.log(result);
// both type is number
// false bcz type is same but value is not equal 50 60
var strnumber = "number";
var number3 = 60;
result = strnumber === number3;
console.log(result);
// type is not same 
// false value and type is not same

var strnumber = "60";
var number3 = 60;
result = strnumber === number3;
console.log(result);
// type is not same 
// value is same both are 60 60
// str is convrt in number but type is not same
// false



//-    != not equal 
// 8 != 5 -> true
// 5 != 5 -> false
// not compare data type 

let f = 20;
let f1 = 20;
console.log(f!=f1);
// f is not equal to f1 but here f is equal == to f1 
// condition is false
let we = 40;
let wr = 30;
console.log(we!=wr);
// true bcz conditon false 40 and 30 is not equal 
// in simple trems true convt in false
// and false convrt in true



//compare data type 
//- !== not equal value or not equal type
// 5 !== 5 -> false
// 5 !== "5" -> true
// 5 !== 8 -> true

var numb = 40;
var numb1 = 40;
console.log(numb !== numb1);
// first check value than check type
// both are same so output is true
// but if yu use ! operator than output is false

var numb = 40;
var numb1 = "40";
console.log(numb !== numb1);


var numb = 40;
var numb1 = 10;
console.log(numb !== numb1);


// > greater than
// 5 > 8 -> false

var gnumber = 23;
var lnum = 10;
console.log(gnumber > lnum);
// 23 is greater than 10
// condition true

let k = 12;
let k1 = 20;
console.log(k < k1);
// k is less than k1 condition is true


// >= greater than or equal to
// 8 >= 8 -> true

var gnumber = 10;
var lnum = 10;
console.log(gnumber >= lnum);
// gnumber is not greate than but equal to so condition is true

var gnumber = 10;
var lnum = 9;
console.log(gnumber >= lnum);

// <= less than or equal to
// 8 <= 8 -> true

let m = 12;
let m1 = 12;
console.log( m <= m1 );
// m is less than but equal to so condition is true


// logical operators
//&& and or ||
// (5<10 && 6>1) true
// (5>10 && 6>1) true
// if both condition are true than condition is true
// if one condition is true and 2nd is false than conditon is false

var number = 20 > 10 && 40 < 50;
console.log(number);
// both condition are true so output is true
// if one condition is true and other is false so condition is false


var checkCondi = 40 > 20 && 10 < 2 && 60 < 70;
// 60 is not less 70 one condition is false
// output is false
console.log(checkCondi); 


// || or
// (5==5 || 6==5) true
// (7==5 || 6==5) false
// atleast one condition is true output will be true

var checkCondit = 40 > 20 || 10 < 2 || 60 < 70;
// one condition is false but other two condition is true 
// so output is true
console.log(checkCondit);
// if all condition is false than output is false
var checkConditi = 10 == 11 || 20 == 30;
// all condition is false so output is false
console.log(checkConditi);


//-  !not operator
// true convert in false
var q = 12;
var q1 = 12;
console.log(q!==q1);

// part 10 if else condition
// part 10 if else condition
// part 10 if else condition
// part 10 if else condition
// part 10 if else condition
// part 10 if else condition
// part 10 if else condition