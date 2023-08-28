// these three functons are used for interact with the users

// alert('this page is not found');
// show a message.


// let age = prompt(`Enter Your age ` ,22);
// // for storing user entering data make variable and puts on it
// // document.write(age); 
// // display on scrren
// if (age != null) {
//     document.write(`Your Age is ${age}`);
     
    
// }else{
//     document.write(`Age Field was Blank`);
// }


// confrim function

// let response = confirm(`Are You Sure, You want to Delete`);
// // check response true or false
// if (response) 
// // if response is true print this
// {

//     document.write(`Deleted`);
    
    
// }else{
//     document.write(`Not Deleted`);
// }


// types conversion

let type = 'hello';
console.log(typeof type);
// string type
let typeNumber = 34;
console.log(typeof typeNumber);
// type numner 
let typeNumber1 = "34";
// number convert into string
console.log(typeof typeNumber1);

let typeBool = true;
console.log(typeof typeBool);
// type true or false boolean

let typeBool1 = "true";
// if i convert true in to strings "true" output will string
console.log(typeof typeBool1);

// two types of conversion in js auto and mannualy


// number + null = 10 + 0 = 10
let typeNulll = 10 + null;
// null means 0 
console.log(typeNulll);
console.log(typeof typeNulll);


// string + null = convert in string 10null
let typeNullStr = "10" + null;
// null means 0 
console.log(typeNullStr);
console.log(typeof typeNullStr);

// string + number = convert in string 105
let typeStrNum = "10" + 5;
// null means 0 
console.log(typeStrNum);
console.log(typeof typeStrNum);

// what if i use - than work like maths 10 - 4 = 6
let typeStrNum1 = "10" - 4;
// string convert in to numbers
// + convert in strings but - work like math value are -
// same as multiple and divide sub remidr
console.log(typeStrNum1);
console.log(typeof typeStrNum1);

// if numbers in strings 
let typeStrNum2= "6" * "2";
// convert both values in to numbers
console.log(typeStrNum2);
console.log(typeof typeStrNum2);


// if numbers in strings and letters in string
let typeStrNum3= "6" * "yes";
// convert in NAN NOT A NUMBER
console.log(typeStrNum3);
console.log(typeof typeStrNum3);

// js three functions
//  string() 
//  number()
//   boolean ()

// number() convert in string

let numberType = 59;
console.log(numberType);
console.log(typeof numberType);

// convert in to string
// make new var for store new value now its a string 
let ConvrtNumberStr = String(numberType);
// its still a number but type convert in to string
//  console.log(numberType);
console.log(typeof ConvrtNumberStr);



// boolean convert in string
let boolType = true;
console.log(boolType);
console.log(typeof boolType);

// convert in to string
let cnvtBoolStr;

 cnvtBoolStr = String(boolType);
 // boolean convert in string
 console.log(typeof cnvtBoolStr);



 // string convert in Number()

 let strr = 'waheed';
 console.log(typeof strr);

 // string convert in number using number() function
let strCnvtNumber;

 strCnvtNumber = Number(strr);
 // now converted value in strCnvtNumber inside
 console.log(strCnvtNumber);
 console.log(typeof strCnvtNumber);

 // convert in number

 // Boolean convert in number
 let Bool1 = false;
 console.log(typeof Bool1);

 // boolean convert in number using Number() function
let CnvtBool;

CnvtBool = Number(Bool1);
 // now converted value in CnvtBool inside
console.log(CnvtBool);
 console.log(typeof CnvtBool);
 // convert in Number



// number convert in boolean

var numBool = 0; // false
var numBool = 2; // true
// only 0 is false and all number is true
console.log(typeof numBool);

// convert in boolean
let cnvrtBool = Boolean(numBool);
console.log(cnvrtBool);


// String convert in boolean

var  strBool = ''; // " " means false
var  strBool = 'hello'; // means true
console.log(typeof strBool);

// convert in boolean
let strCnvrtBool = Boolean(strBool);
console.log(strCnvrtBool);




