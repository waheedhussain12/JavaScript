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

let age1 = 19;

if (age1 >= 19) {
    console.log('you can vote');
    // >= greater but its equal so condition true

} else{

    console.log('you can not vote');
}

// exp2
let age2 = 21;

if (age2 < 19) {
    console.log('you can vote');
    
} else{

    console.log('you can not vote');
    // this condition is true bcz 19 less than 21

}

let ageee = 18;
let voterCard = 'no';
let timee = '10pm'

if (ageee >=17 && voterCard == 'no' && timee == '10pm') {
    // here first conditon true
    // sec condition is false
    // && means both conditions must be true

    console.log('you can vote bcz yu have a id card');
} else if (ageee >= 18 && voterCard == 'yes' && timee == '10pm') {
    console.log('first make your id than you can vote');
    // here first condition is true and sec condition is also true
    // so this statement will excuted
} else {
    console.log('your age is 17 you can not vote');
    
}

// nested if else
let age3 = 18;
let idCardd = 'yes';

if (age3 <=19) {
    // first check this
    // nested if 
    if (idCardd == 'yes') 
    // and than check this condition
    {
        console.log('oversees Pakistani can vote');
       // if both conditions are true this will excute
        
    }else{
        console.log('first make id Card from pak Govrt');
    }
    
}

// ternary operator
let isLoggedinn = 0; // if loggedout if 1 login
if (isLoggedinn == 0) {
    console.log('Log in');
    
}else{
    console.log('log out');
}

let optionn = isLoggedinn == 1 ? 'Logout' : 'login';
console.log(optionn);
// condition true or false output store in variable optionn

let useer;
// useer = "waheed hussain";
//  -?? is to avoid undefined
console.log(useer ?? 'guest user');


let isNumberGreaterr = 100;
let lessNumber = 60;

if (isNumberGreaterr >40 && lessNumber < 70) {
    // here both conditon is true
    console.log('yes both condition is true 100 greater than 40 and lessnumber less than 70');

    
} else{

    console.log('number is less');
}

let isNumberGreater2 = 100;
let lesserThan2 = 40;

if (isNumberGreater2 > 56) {

    console.log('number is Big');
    //nested if else
    // check sec conditon
    if (lesserThan2 == 40) {
        console.log('both condition is true');
        
    }else{

        console.log('both condition is false');
    }
}


let marks = 80;
let grade = "A GRADE";
let marks2 = 70;
let grade2 = 'B GRADE';

if (marks == 80 ) {
    if (grade == "A GRADE") {
        console.log('Congrts you got ',grade);
        
    } if (marks2 == 70) {
        if (grade2 == 'B GRADE') {
            console.log('Congrt you got ',grade2);
        }
        
    }
}


 let fanIsStart  = 'on';
 let btn = 'on'
 let lightAva = 'avalble';
let btn2isOn = 'off';

if (lightAva == 'avalble') {
    if (btn == 'on' && fanIsStart == 'on') {
        console.log('enjoy yu r confrt');


    } if (lightAva == 'avalble') {
        if (btn2isOn == 'off') {
           if (fanIsStart == 'off') {
            
           }
            console.log('fan is off');
            
        }
        
    } if (lightAva == 'avalble' ) {
        if (btn == 'on') {
            if (fanIsStart == 'on') {
                console.log('error in ');
            }  
            
        }
        
    }
}

let Gas = 'avaible';
let Milk = 'NotAvaible';

if (Gas == 'avaible') {
    console.log('We can make tea');

}
if(Gas == 'avaible' && Milk == 'NotAvaible'){
    console.log('We cannot make tea')
}


let numm = 49;
let str1 = 'on'
if (numm > 20 && str1 == 'on') {
    
    console.log('number is grater');
} else if(numm == 49 && str1 == 'off'){
   
    console.log('number is equal');
} else if(numm == 49 && str1 == 'off'){
   
    console.log('third condition is true when upper condition is false');
}else if(numm == 49 && str1 == 'off'){
   
    console.log('third condition is true when upper condition is false');
}
else{
    console.log('all conditions are false');
}


// part 11 and 12 while do while for loops


var counter = 1;
while (counter <=10) {
    console.log('Print waheed hussain 10th time');
    // counter ++; // increment plus 1
    // also use this
    // you can add multiple divide sub remiddr
    counter = counter + 2; // increment plus 2
}

var counter1 = 1;
var sum = 0;

while (counter1 <=10) {
    // check condition
    if (counter1 % 2 ==0) {
        sum = sum + counter1
        
    }
    // console.log(counter1,'print 1 to 10th number');
    counter1++;
    console.log(sum);
    
}

// exp while loop

var counter3 = 1;
while (counter3 <= 6) {

if (counter3 == 3) {
    console.log('rightnow Counter is three 3');
}

if (counter3 == 5) {
    console.log(typeof counter3);
    
}
if (counter3 == 6) {
    cnvt = String(counter3);
    console.log('convert in string',cnvt);
    console.log(typeof cnvt);
    
}
    console.log('counter start 1 to 6');
    counter3 ++;
    
}

// do while
var counter4 = 12;
do {
    console.log('Always excuting first condition in do while loop');
    counter4 ++;
    // here first condition is false 
} while (counter4 <=10);


var counter4 = 12;
do {
    console.log('Always excuting first condition in do while loop');
    counter4 ++;
    // here first condition is false 
    // than check condition in while 
} while (counter4 <=18);


// for loop

for(var counter5 = 1; counter5 <= 10; counter5++){
    console.log(counter5);

} 

var numberB = 1;
while (numberB <=10) {
    console.log('print one to 10th numbers',numberB);
    numberB ++;
    
}


 var nnum = 1;
 var priinntName = 'Add this Statement';

 while (nnum <= 5) {
    // add statement in 3th number
    if (nnum == 3) {
        console.log(priinntName,nnum);
        // break;
        // if you use break progrm out ofthe loop
    }
    console.log('print 5th time ',nnum);
    nnum ++;
    
 }


 var counterNum = 1;
 var priceCounter = 1; 

 while (counterNum <=6 && priceCounter <=6 ) {
    // check condition 
    if (counterNum == 2 && priceCounter == 2) {
       console.log('price is 20RS only');
           
    }
    console.log(counterNum,'Price is 100RS');
    console.log(priceCounter, 'price');
   priceCounter ++;
    counterNum ++;
   
 }

 for(var numbr = 1; numbr <=5;numbr ++){

    if (numbr == 3) {
        console.log('this is three number',numbr);
        break;
    }
    console.log('print 1 to 5th number ',numbr);

 }