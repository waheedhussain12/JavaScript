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

(number = 23), 34;
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
var brandName = "book";
brandName = "Big BookCompany"; // yu can update the value
let pen = "ballpen";
pen = "pointerPen"; // also yu can update the value in let
console.log(price, brandName, pen);

// only declare variable

var carName; // only declare a variable not give a value output is undefined
console.log(carName);

//a declaration can span multiples lines
// one variable different types of data
var myName = "Waheed ",
  lastName = "Hussain",
  caste = "laghari";
age = 21;
console.log(myName, lastName, caste, age);
// add multiple variables and values seprated by comma

// re-declaring js variables
//if you re declare variable use var it will not lose its value
// note use var
var myName = "Waheed";
myName; // redeclare but still have a value
myName = "WAHEED HUSSAIN"; // now value is changed bcz its update
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
const pricee = 34;
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
  console.log(namee, age);
}
// access value age and number outside the block scope
console.log(age, namee); // got value
// var is not a block scope

// in js let and const are block scope
// let in block scope
{
  // access inside the block scope is allow
  let key = 224;
  let value = "this is my laptop";
  console.log(key, value);
}
// access from outside the block scope using let
// console.log(key , value);
// reference error key and value is not defined
// means yu cannot access element outside the block scope

// yu can (re declare variable) in side the block scope in let and const
{
  let key = 224;
  let value = "this is my laptop";
  console.log(key, value);
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

let a; // declare
a = 65; // value asign
console.log(a);

var b; // declare
b = "number"; // value asign
console.log(b);
// getting error bcz when you declare a const you must asign a value
// const ax;
// ax = 34;
// console.log(ax);

// constant array

const cars = ["BMW", "toyota", "volvo", "mehran"];
// update element in array using index
console.log(cars);
cars[1] = "TOYOTA 2023";
console.log(cars);
// now toyota element change in new toyota2023

cars.push("CD 70");
console.log(cars);
// yu can add element as well

// constant object
const person = {
  firstName: "Waheed",
  lastName: "Hussain",
  age: 21,
  rollNo: "2k21/CSEE/88",
};
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
sum = onenumber ** 4;
console.log(sum);

// addition btw number and string

var n = 23;
var str = "apple";
sum = n + str;
console.log(sum);
// number convert in string

var fName = "waheed";
var lName = "hussain";
console.log(fName + " " + lName);

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

str = 'Waheed"laptop';
console.log(str);

str = "Waheed'laptop";
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

let arr = ["hy", 23, "waheed", 34.34];
console.log(arr);

// object
let obj = {
  key: 2324352,
  value: "2414RS",
};
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
console.log(number3 == strName);
// first convert in string than compare
// here "5" string convert in number than compare
// output false 5 and 13 not equal

var number3 = 5;
var strName = "5";
console.log(number3 == strName);
// result true 5 and 5 is equal
// first str convrt than compare

var number3 = "5";
var strName = "5";
console.log(number3 == strName);
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
console.log(f != f1);
// f is not equal to f1 but here f is equal == to f1
// condition is false
let we = 40;
let wr = 30;
console.log(we != wr);
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
console.log(m <= m1);
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
console.log(q !== q1);

// part 10 if else condition

let age1 = 19;

if (age1 >= 19) {
  console.log("you can vote");
  // >= greater but its equal so condition true
} else {
  console.log("you can not vote");
}

// exp2
let age2 = 21;

if (age2 < 19) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
  // this condition is true bcz 19 less than 21
}

let ageee = 18;
let voterCard = "no";
let timee = "10pm";

if (ageee >= 17 && voterCard == "no" && timee == "10pm") {
  // here first conditon true
  // sec condition is false
  // && means both conditions must be true

  console.log("you can vote bcz yu have a id card");
} else if (ageee >= 18 && voterCard == "yes" && timee == "10pm") {
  console.log("first make your id than you can vote");
  // here first condition is true and sec condition is also true
  // so this statement will excuted
} else {
  console.log("your age is 17 you can not vote");
}

// nested if else
let age3 = 18;
let idCardd = "yes";

if (age3 <= 19) {
  // first check this
  // nested if
  if (idCardd == "yes") {
    // and than check this condition
    console.log("oversees Pakistani can vote");
    // if both conditions are true this will excute
  } else {
    console.log("first make id Card from pak Govrt");
  }
}

// ternary operator
let isLoggedinn = 0; // if loggedout if 1 login
if (isLoggedinn == 0) {
  console.log("Log in");
} else {
  console.log("log out");
}

let optionn = isLoggedinn == 1 ? "Logout" : "login";
console.log(optionn);
// condition true or false output store in variable optionn

let useer;
// useer = "waheed hussain";
//  -?? is to avoid undefined
console.log(useer ?? "guest user");

let isNumberGreaterr = 100;
let lessNumber = 60;

if (isNumberGreaterr > 40 && lessNumber < 70) {
  // here both conditon is true
  console.log(
    "yes both condition is true 100 greater than 40 and lessnumber less than 70"
  );
} else {
  console.log("number is less");
}

let isNumberGreater2 = 100;
let lesserThan2 = 40;

if (isNumberGreater2 > 56) {
  console.log("number is Big");
  //nested if else
  // check sec conditon
  if (lesserThan2 == 40) {
    console.log("both condition is true");
  } else {
    console.log("both condition is false");
  }
}

let marks = 80;
let grade = "A GRADE";
let marks2 = 70;
let grade2 = "B GRADE";

if (marks == 80) {
  if (grade == "A GRADE") {
    console.log("Congrts you got ", grade);
  }
  if (marks2 == 70) {
    if (grade2 == "B GRADE") {
      console.log("Congrt you got ", grade2);
    }
  }
}

let fanIsStart = "on";
let btn = "on";
let lightAva = "avalble";
let btn2isOn = "off";

if (lightAva == "avalble") {
  if (btn == "on" && fanIsStart == "on") {
    console.log("enjoy yu r confrt");
  }
  if (lightAva == "avalble") {
    if (btn2isOn == "off") {
      if (fanIsStart == "off") {
      }
      console.log("fan is off");
    }
  }
  if (lightAva == "avalble") {
    if (btn == "on") {
      if (fanIsStart == "on") {
        console.log("error in ");
      }
    }
  }
}

let Gas = "avaible";
let Milk = "NotAvaible";

if (Gas == "avaible") {
  console.log("We can make tea");
}
if (Gas == "avaible" && Milk == "NotAvaible") {
  console.log("We cannot make tea");
}

let numm = 49;
let str1 = "on";
if (numm > 20 && str1 == "on") {
  console.log("number is grater");
} else if (numm == 49 && str1 == "off") {
  console.log("number is equal");
} else if (numm == 49 && str1 == "off") {
  console.log("third condition is true when upper condition is false");
} else if (numm == 49 && str1 == "off") {
  console.log("third condition is true when upper condition is false");
} else {
  console.log("all conditions are false");
}

// part 11 and 12 while do while for loops

var counter = 1;
while (counter <= 10) {
  console.log("Print waheed hussain 10th time");
  // counter ++; // increment plus 1
  // also use this
  // you can add multiple divide sub remiddr
  counter = counter + 2; // increment plus 2
}

var counter1 = 1;
var sum = 0;

while (counter1 <= 10) {
  // check condition
  if (counter1 % 2 == 0) {
    sum = sum + counter1;
  }
  // console.log(counter1,'print 1 to 10th number');
  counter1++;
  console.log(sum);
}

// exp while loop

var counter3 = 1;
while (counter3 <= 6) {
  if (counter3 == 3) {
    console.log("rightnow Counter is three 3");
  }

  if (counter3 == 5) {
    console.log(typeof counter3);
  }
  if (counter3 == 6) {
    cnvt = String(counter3);
    console.log("convert in string", cnvt);
    console.log(typeof cnvt);
  }
  console.log("counter start 1 to 6");
  counter3++;
}

// do while
var counter4 = 12;
do {
  console.log("Always excuting first condition in do while loop");
  counter4++;
  // here first condition is false
} while (counter4 <= 10);

var counter4 = 12;
do {
  console.log("Always excuting first condition in do while loop");
  counter4++;
  // here first condition is false
  // than check condition in while
} while (counter4 <= 18);

// for loop

for (var counter5 = 1; counter5 <= 10; counter5++) {
  console.log(counter5);
}

var numberB = 1;
while (numberB <= 10) {
  console.log("print one to 10th numbers", numberB);
  numberB++;
}

var nnum = 1;
var priinntName = "Add this Statement";

while (nnum <= 5) {
  // add statement in 3th number
  if (nnum == 3) {
    console.log(priinntName, nnum);
    // break;
    // if you use break progrm out ofthe loop
  }
  console.log("print 5th time ", nnum);
  nnum++;
}

var counterNum = 1;
var priceCounter = 1;

while (counterNum <= 6 && priceCounter <= 6) {
  // check condition
  if (counterNum == 2 && priceCounter == 2) {
    console.log("price is 20RS only");
  }
  console.log(counterNum, "Price is 100RS");
  console.log(priceCounter, "price");
  priceCounter++;
  counterNum++;
}

for (var numbr = 1; numbr <= 5; numbr++) {
  if (numbr == 3) {
    console.log("this is three number", numbr);
    break;
    // break program from 3
  }
  console.log("print 1 to 5th number ", numbr);
}

var numberr = 1;
var tv = "on";

while (numberr <= 5) {
  if (numberr == 2 && tv == "on") {
    console.log("TV is On");
  }

  if (numberr == 4 && tv == "on") {
    console.log("TV is off");
  }
  console.log(numberr, "work fine");
  numberr++;
}

// break and contiune

var br = 1;
while (br <= 6) {
  if (br == 2) {
    console.log("break program from 2nd number");
    break;
    // program break and exit from 2nd number
  }
  console.log(br, "print this");
  br++;
}

let b1 = 1;
for (b1; b1 <= 6; b1++) {
  // statement 2th will not excute
  if (b1 == 2) {
    console.log("2th statement will not show");
    continue;
  }
  console.log("numbers", b1);
}

// these three functions are used for interact wuth the users

// alert("this page is not found");
// show a message in web

// var age ;
// prompt use for take output from users
// age = prompt("Enter your age",22);
// for Storing user entering data make variable and puts on it

// show on webpage using document.write
// document.write(age)
// check condition
// if (age != null) {
//     document.write(`Your Age is ${ age}`);
// }else{
//     document.write(`Age Field was blank`);
// }

// confrim function
// var response;
// response = confirm(`Are you sure, you want to delete`);
// check response true or false
// if (response != null) {
//     document.write(`Deleted`);

// }else{
//     document.write(`Not Deleted`);
// }

// type conversion

// type checking

// string
var typestr = "Waheed hussain";
console.log(typestr, typeof typestr);

// number
var typenumber = 45;
console.log(typenumber, typeof typenumber);

// number inside the string
var typestrInNumber = "78";
// number convert in string
console.log(typestrInNumber, typeof typestrInNumber);

//boolean
var typebool = true;
// type true or false boolean
console.log(typebool, typeof typebool);

//what if i write 'true or false' inside the string
var typeBoolstr = "true";
// this true consider string
console.log(typeBoolstr, typeof typeBoolstr);

// two types of conversion in js auto and mannualy

// number + null = number 10 + 0 = 10
var typenull = 10 + null;
// null means 0 so output will be 10 null is not consider
console.log(typenull, typeof typenull);

// string + null = null convert in string
var typestrNull = "10" + null;
//null convert in string means 10null
console.log(typestrNull, typeof typestrNull);

// string + number
// number convert in string using + operator
var typestrNumber = "apple" + 10;
console.log(typestrNumber, typeof typestrNumber);

// what if i use - than work like math 10 - 4 = 6
var typestrnumbr = "10" - 4;
// only  + operator can number convert in string
//but - * % / work like math in strings
// here string convrt in numbers
// here inside the string '10' - 4 number = 6
console.log(typestrnumbr, typeof typestrnumbr);

// if both values are number inside the string
// string convert in numbers
var bothnumStr = "12" * "42";
// here convert both strings into numbers than both multiple
console.log(bothnumStr, typeof bothnumStr);

// if number in string and letter in string
var typeletterNumber = "yes" - "78";
// convert in NAN NOT A NUMBER
console.log(typeletterNumber, typeof typeletterNumber);

// three functions in js
// string()
// number()
// boolean()

// String

var str = "waheed";
console.log(str, typeof str);

// string convert in number and boolean
// value not change but type changed

// convert in number
// for store new type make variable for new value
var convrtInNumbr;
convrtInNumbr = Number(str);
console.log(convrtInNumbr, typeof convrtInNumbr);

// convert in boolean
// any letter inside the string
// always give us true output
var convertInbool;
convertInbool = Boolean(str);
console.log(convertInbool, typeof convertInbool);

// in string with '' quotes is always false
var fstr = "";
// empty quotes always false
a;
a = Boolean(fstr);
console.log(a, typeof a);

// number
var number = 45;
console.log(number, typeof number);

// number convert string and boolean

// convert in string
var convrtInNum;
convrtInNum = String(number);
console.log(convrtInNum, typeof convrtInNum);

// convert in boolean
// all numbers give us true value 1 4 6 78 ..
// only 0 give us false value
var convrtINbol;
convrtINbol = Boolean(number);
console.log(convrtINbol, typeof convrtINbol);
// with o value
var boolInzero = 0;
var convrtINbol;
convrtINbol = Boolean(boolInzero);
console.log(convrtINbol, typeof convrtINbol);

// Boolean
// boolean convert string and number
var bool = true;
console.log(bool, typeof bool);

// convert in string
cnvrtInstr = String(bool);
console.log(cnvrtInstr, typeof cnvrtInstr);

// Convert In Number
// True Means 1 and False Means 0
cnvrtInNum = Number(bool);
console.log(cnvrtInNum, typeof cnvrtInNum);

// string manipulation

// string in single quotes
var str = "Waheed Hussain";
console.log(str);

// string in double quotes
var str = "Waheed hussain in double quotes";
console.log(str);

//  two or more strings plus +
var str = "waheed" + "hussain" + "laghari";
console.log(str);

// two or more strings puls value in different variables
var str = "can you ";
var str2 = "eat this plzz";
console.log(str + " " + str2);

// store value another string
// simple way
var str3 = "this is string one";
var strResult;
strResult = str3;
console.log(strResult);

// another way

var str4 = "my name is .....";
var str5 = `${str4}`; // str4 now store in str5
// now str4's value in side the str5
console.log(str5);

// string in new line use \n

var str = "developer\nat jamshoro";
console.log(str);

// space in sentence in string
// use \' \" put in string use double \\ in sentence
// use \ btw strings and put any letter or sign
// btw them

var str = "waheed'hussain";
console.log(str);

var str = 'waheed"hussain';
console.log(str);

var str = "waheed\\hussain";
console.log(str);

var str = "waheed@hussain";
console.log(str);

var str = "waheed\thussain";
console.log(str);

var str = "waheed-hussain";
console.log(str);

var str = "waheed'hussain";
console.log(str);

// tab space use t
var str = "waheed\thussain?";
console.log(str);

// find length of string
// spaces are also count
var str = "hy this is my hp laptop";
console.log(str.length);

// find any letter in string using index []
var stranyLetter = "waheed husain";
// store stranyletter's value in findnewvalue
findnewValue = stranyLetter;
console.log(findnewValue[5]);
console.log(stranyLetter[3]);
// find any letter position using index[]

// compare string
var str11 = "compare two strings";
var str22 = "compare two strings";
// note space and small or capitals letter also count
// compare using if condition
if (str11 == str22) {
  console.log("String are Equal");
} else {
  console.log("Not Equal");
}

// string concat() function

var strr1 = "this is a";
var strr2 = "ballbat";
var strr3 = "but its not my fav game";

// simple concat using plus +
// first you can concat all strings in side the log using +
console.log(strr1 + " " + strr2 + strr3);

// also make another variable for store all strings value
var result;
result = strr1 + " " + strr2 + strr3;
console.log(result);

// use concat() in side the log
console.log(strr1.concat(" ", strr2, " ", strr3));

// here the best way
// make another variable for store all strings
var result2 = strr1.concat(" ", strr2, " ", strr3);
// simple print result2
console.log(result2);

var str = "  this is a JavaScript video. It is a good video  ";
var store;
// first you set a position than you set length
// positon count start 0 and length start count 1
store = str.substr(8, 10);
console.log(store);

// sec function indexof()
// first make variable for store data
var savestr;
savestr = str.indexOf("video");
// word position
console.log(savestr);

var savestr1;
savestr1 = str.indexOf("s", 6);
// search from 6th letters
console.log(savestr1);

// 2nd funcition LastIndexOf()
var savestr2;
savestr2 = str.lastIndexOf("video");
// index start 0
// search from last
console.log(savestr2);

// delete extra space use trim()
var trimstrr;
trimstrr = str.trim();
trimstrr = str.trimStart();
trimstrr = str.trimEnd();
// delete space from start and end
console.log(trimstrr);

// to Upppercase funciton ()
// to Lowercase funciton ()

// replace () function
// replace and add new value in a string
var replaceStr;
replaceStr = str.replace("good", "best");
console.log(replaceStr);

// includes()
// check in string value return true or false
var includesStr;
includesStr = str.includes("Video");
console.log(includesStr);

// Array and js operations in Array

// simple declaration
var book1 = "Math";
var book2 = "Physics";
var book4 = "Bio-Chemistry";
var book5 = "ComputerScience";
var book6 = "English";
console.log(book1, book2, book4, book5, book6);

// add multiple data in array
var book = ["Math", "Physics", "Bio-Chemistry", "ComputerScience", "English"];
// print full array
console.log(book);

// access particular one element use
//first way
console.log(book[2]); // access element
// sec way
// make new variable for store data
var b = book[1];
console.log(b);

// also change or update value in element using index
// first way
var storeArr;
storeArr = book[0] = "Urdu";
console.log(storeArr);

// sec way
console.log((book[0] = "Sindhi"));
// third way
book[0] = "Math";
console.log(book);

// find length of an array

// first way
var len;
len = book.length;
console.log(len);

// sec way
console.log(book.length);

// add element in array using push() function
book.push("Sindhi");
// using push you can add element only in last
console.log(book);

// also you can add element in starting in an array
// using unshift() function
book.unshift("Urdu");
console.log(book);

// also you can delete an element in array
// using pop() function
// pop function allow only delete from last element
book.pop(); //delete last element
console.log(book);
book.pop(); // delete sec last element
console.log(book);

// delete element using shift () function
// shift() delete from first than sec than third

book.shift(); // first element deleted
console.log(book);
book.shift(); // Sec element deleted
console.log(book);

var book = ["Math", "Physics", "Bio-Chemistry", "ComputerScience", "English"];
// print full array
console.log(book);
// you can delete any element using splice function
// splice() works on position means start and deleteCount
book.splice(1, 3);
console.log(book);

// also you can empty Array
book = []; // now array is empty
console.log(book);
// also you can try this method
// using length function
book.length = 0;
console.log(book);

var book = ["Math", "Physics", "Bio-Chemistry", "ComputerScience", "English"];
// print full array
console.log(book);

// you can find poistion of an element
// also make a variable to store a poition's value
var elementPosArr = book.indexOf("Physics");
console.log(elementPosArr);

// try this way also using log()
console.log(book.indexOf("English"));

var book = ["Math", "Physics", "Bio-Chemistry", "ComputerScience", "English"];
// using this function you can check it is Array or not
// Array.isArray() its work on true or false
// print full array
console.log(Array.isArray(book));

// String text convert an Array use split() function
// split function works on space
var strtext = "this is a randoms texts";
// convert in Array
// first way using console
console.log(strtext.split(" "));
// first convrt an Array than delete all S in array
console.log(strtext.split("s"));

// Array convrt in to an String using join() function
var book = ["Math", "Physics", "Bio-Chemistry", "ComputerScience", "English"];
console.log(book.join(" "));
// add space or any letter in double quotes
var cnvrtinToStr;
cnvrtinToStr = book.join("-");
console.log(cnvrtinToStr);

// add to or more Arrays
// using concat() function
var book = ["Math", "Physics", "Bio-Chemistry", "ComputerScience", "English"];
var book1 = ["Sindhi", "Chemistry", "DSA", "Urdu"];
// first way
console.log(book.concat(book1));

// sec way
// make a new variable for store data
var twoArrAdd;
twoArrAdd = book.concat(book1);
console.log(twoArrAdd);

// Multi dimensional Array
// Array of an Array
 var multiArr = [

['laptop','Price'],
 ['name','Waheed',['mobile',500]],
 ['caste','laghari'],
 ['dept','Computer Science'],
 ['penType','ballPen'],

 ];
//  console.log(multiArr);
// access array
var fetcharr = multiArr[1];
console.log(fetcharr);


















// use loops in array
var book = ["Math", "Physics", "Bio-Chemistry", "ComputerScience", "English"];
var booklen; // for store new value
booklen = book.length;
for (i = 0; i < booklen; i++) {
  if (i < booklen && i == 3) {
    // check condition
    console.log("this condition is true", i);
  }
  console.log(i, book[i]);
}

// forEach loop in Array
var book = [
  "Math",
  "Physics",
  "Bio-Chemistry",
  "ComputerScience",
  "English",
  45,
];

console.log(book[1]); // get element using index
book.forEach(funName); // function pass in foreach()

function funName(getValue) {
  // funName
  console.log(getValue);
}

// sec way to declare an array
var arrr = new Array("waheed", "hussain", "leghari");
console.log(arrr);
