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

// datatypes

// string
let yuCaste = "leghari";
console.log(yuCaste);

// also yu can add two strings

let oneN = "waheed";
let oneN1 = "hussain";
console.log(oneN + oneN1);

// alos yu can add numbr and string
// number convert in string
let num12 = 66;
let addname = "waheed";
console.log(num12 + addname);

// reasons for using double quote and single
let mynamee = " wahee\"d";
console.log(mynamee);
// same as single quote
let mynameee = 'waheed\'s iphone';
console.log(mynameee);

// also use this
let mynam1 = "waheed'phone";
console.log(mynam1);
let mynam11 = 'hell"o';
console.log(mynam11);

// number data type
let n1 = 56;
let n2 = 23.45;
console.log(n1 +n2);
console.log(n1, n2);

// boolean true or false

let bignum = 45;
let smallnum = 23;
console.log( bignum > smallnum);

// array
let arrr =["my", "name is ","computer",34];
console.log(arrr);

// object 
let obj1 ={
    key: "value" , key2:23,
}
console.log(obj1);

let undeff ;
console.log(undeff);
let undefff = "this is not undefine";
console.log(undefff);

let checktypeof = "waheed"
console.log(typeof checktypeof);


// comparison and logical operators

// equal to ==
let isValueEqul = 40;
let isValueEqulNot = 34;
console.log(isValueEqul==isValueEqulNot);
let isValueEqull = 50;
console.log(isValueEqull == 50);
// check equal to condition

// equal value and equal type

let agee = 23;
let  boy = "waheeed";
console.log(agee === boy);
// bcz type and value is different means not equal
let ageee = 23;
let  boyy = 23;
console.log(ageee === boyy);
// condition true bcz type and value is same

let ageeee = 23;
let  boyyy = 213;
console.log(ageeee === boyyy);
// type same but value is not so condition is fasle



//-    != not equal 

let moon = 23;
let night = 40;
console.log(moon!=night);
// condition true bcz 23 and 40 is not equal
//-    !== not equal 
let mooon = 23;
let  nightt = "not equal to";
let compr = mooon !== nightt;
console.log(compr);
// check both type and value

// greater than >

let x = 34;
let x1 = 343;
let cmp = x > x1;
// x less and x1 greater condition is false
console.log(cmp);
let y1= 34;
let y2 = 3;
let cmp1 = y1 > y2;
console.log(cmp1);

let fir = 20;
let sec = 20;
console.log(fir >= sec);

// less than
let les = 23;
let les2 = 40;
console.log(les < les2);
// less than equal to
let l = 23;
let l2 = 40;
console.log(l<= l2);

// and &&
let a1 = 12 >10 && 40 > 30;
console.log(a1);

let b2 = 40 <30 && 10<12;
// one condition is true and sec is false
// any how all condition is true than output is true
console.log(b2);

// || or
let s = 100 <50 || 200 > 150;
// first condition is falsr but sec is true so output is true

console.log(s);

let d = 23 !==23;
console.log(d);
// true condition convert in false 