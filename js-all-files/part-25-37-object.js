// object in js
// object syntax
// var name = {} object
// var person = {}; // empty object
// console.log(person);
// person is object
var person = {
  firstName: "waheed", // these are propertyies
  lastName: "hussain",
};

// two ways in access an object

// first way access from . notation
console.log(person.firstName, person.lastName);

// sec way to access object form like Array[] notation
console.log(person["firstName"]); // access like Array
console.log(person["lastName"]);
// console.log(person); // print all object

var person = {
  // space is allow in properties like first Name
  // note use ""or '' double quote or single than inside property name
  "first Name": "waheed", // note Space are count use camel case or -
  lastName: "hussain",
};
// here .notation is not working
console.log(person["first Name"]); // this is allow
console.log(person.lastName); // this is also allowed

var person = {
  firstName: "waheed",
  lastName: "hussain",
};
// also print full object
console.log(person);
// also add property later
person.age = 33; // here person is object and age is proprty and 33 is property's value
// Also you can change value in property
person.lastName = "Ali";
console.log(person.lastName);
// Also you Can delete property in object
delete person.lastName;
console.log(person); // now lastName is deleted
// What if we are not asign property in object
// output is undefined
console.log(person.age);

// Also You can check in object this property is exist or not
console.log(person.favcolor);
// You will get undefined bcz this property is not exits in object
// Also sec way to check
console.log("favcolor" in person);
// Here property inside the stirng
// In opertor give us value in true or false

// We don't Know How maney properties  are in object
// So We can use for in loop
var person = {
  firstName: "waheed",
  lastName: "hussain",
};
// also print full object
console.log(person);
// also add property later
person.age = 33;

for (let check in person) {
  // console.log(check); // show all property in output
  console.log(check + ": " + person[check]); // also check values of
  // using index[] like Array
}

// object

var house = {
  //this is object => house
  // this is properties => all properites
  // 'kit chen': 'for making tea or Dinner',
  // this is also valid take property in to stings
  kitchen: "for making tea or Dinner",
  rooms: "all rooms for rent",
  bed: "for sleeping",
  washroom: "for changing cloths",
  storeRoom: "for store cloths and other staff",
  chair: "Chair for sitting",
};
// console.log(house['kit chen']);// here . notation is not work reason is space
// print full object
console.log(house);
// you can access proprties and its value one by one
// two types of access values in object
// one . notation and second index[] like Array

// first way using . notation
console.log(house.bed); // best way
// also make a variable and store property and its value
var fst = house.bed;
console.log(fst);
// second way using index[] like Array
console.log(house["chair"]);
// note take property in strings "chair",
// Also you can add property and its value in object
house.lightBoard = "for truning on light";
// here house is object and lightBoard is property and for truning on light is value
console.log(house.lightBoard);
// property and its value is added or element

// also you can update or property's value change
house.kitchen = "for making tea or Dinner also lunch and breakfast";
console.log(house["kitchen"]);
// note if use [] must use string inside the []
// also you can delete property and its value
delete house.rooms;
console.log(house.rooms); // check
// rooms property is deleted thats why output is undefined
// undefined means this property is not in object

// second way to check property is available in object or not
// using in operator

console.log("houseColr" in house);
// in operator give us values in true or false not undefined
// note always take property inside the string 'houseColor'
console.log("kitchen" in house);
// output is true bcz kitchen is available in the object

// We don't Know How maney properties  are in object
// So We can use for in loop
for (var i in house) {
  console.log(i + ": " + house[i]);
  // note in for in loop must use array[] notation
  // i for properties
  // house[i] for values
}

// METHODS IN OBJECT
// object connect with function is called method
var person = {
  firstName: "Waheed",
  lastName: "Hussain",
  caste: "Leghari",
  age: "21",
  // four way to make method
  // this method has no function declare or name
  // direct ( ) { } method is done
  sayHello22() {
    console.log("Hello! im method inside object without function");
  },
  // third way to make method
  // direct make method and asign function inside the object
  //  sayHello2: function (){
  //     console.log('Hello! im method inside the object');
  //  }
};
// person.sayHello2();
person.sayHello22();

// there are four ways to make methods in js
person.sayHello = function () {
  // object method function
  // sayHello is method name
  // same as we store function in Variable
  // here person is object and sayHello is method and function
  console.log("Hello Iam an Object!");
  // console.log(person);
};
// calling and object and method sayHello
person.sayHello(); // this is method
// now object in an action

// second way
// first make noraml function
function myfu() {
  console.log("Hello iam a normal function");
}
// connect function wtih object
// object method function name
person.sayHello = myfu;
// now all values are in method
person.sayHello();

// this in object
var person = {
  firstName: "waheed",
  lastName: "hussain",
  mymethod() {
    // person.firstName and simple use this means my
    console.log(
      "Hello my name is " + this.firstName,
      this.lastName + " and this is my new " + car.brand + " car"
    );
    // calling another object in the object
  },
};
var car = {
  brand: "Tata",
  medel: "Safari",
};
// calling Method
person.mymethod();

// math in object

var result = Math.PI;
var result = Math.E;
console.log(result);

var result2 = 4.7; // round means 4.7 output is 5
// 4.4 output is 4 means .4 lesser .6 upper
var result2 = Math.round(4.7);
console.log(result2);
// ceil give is highest number
// 4.5 means 5 or 10.1 means 11
var result3 = Math.ceil(10.7);
console.log(result3);
// lowest number show 5.2 means 5  or 8.9 means 8
// points are not count
var result3 = Math.floor(8.7);
console.log(result3);
// delete all point in number 10.6 means 10 5.5 means 5
var result3 = Math.trunc(10.7);
console.log(result3);
// power
var result3 = Math.pow(10, 2);
console.log(result3);
// square
var result3 = Math.sqrt(10.7);
console.log(result3);
// find min number
var result3 = Math.min(23, 2442, 242, 13, 12, 1);
console.log(result3);

// find max number
var result3 = Math.max(23, 2442, 242, 13, 12, 1);
console.log(result3);

// Random Numbers in js topic object
// use floor for delete points

var randomNumber = Math.floor(Math.random() * 10); // 0 to 9
console.log(randomNumber);
// one number is biger
var randomNumber = Math.floor(Math.random() * 13); // 0 to 12
console.log(randomNumber);
var randomNumber = Math.floor(Math.random() * 101); // 0 to 100
console.log(randomNumber);

// if you want to start number from 1 use + 1
var randomNumber = Math.floor(Math.random() * 13) + 1; // 0 to 12
console.log(randomNumber);

// use this formula
var randomNumber = Math.floor(Math.random() * (25 - 15)) + 15;
// less 15 greater 25
console.log(randomNumber);

// function
function getRandom(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

var store = getRandom(10, 20); // 20 is incloude
console.log(store);

// date in js
var showDate;
showDate = new Date();
// store my computers current year date time months
console.log(showDate);
// but i want date past time
showDate = new Date(2022, 11, 13, 10, 33, 65, 7);

console.log(showDate);
showDate = new Date(2022, 11);
// month and days are start with 0 index
// output will 0 0 0 0 but minium add year and month
console.log(showDate);
// you can also add parameters in string ""
showDate = new Date("october'13, 2012 11:12:33");
console.log(showDate);
// different types of methods
// get time
console.log(showDate.getTime());
// get full year
console.log(showDate.getFullYear());
// month
console.log(showDate.getMonth());
// get date
console.log(showDate.getDate());
// get mint
console.log(showDate.getMinutes());
// get sec
console.log(showDate.getSeconds());
// get hours
console.log(showDate.getHours());
// get day start with 0 index[]
console.log(showDate.getDay());
// also you can change element using set
// change year
showDate.setFullYear(2024);
console.log(showDate);
// change month
showDate.setMonth(2);
console.log(showDate);
// change data
showDate.setDate(2);
console.log(showDate);
// changes hours
showDate.setHours(3);
console.log(showDate);
// change mints
showDate.setMinutes(10);
console.log(showDate);

showDate1 = new Date("october'13, 2012 11:12:33");
showDate2 = new Date("october'13, 2012 11:12:33");
// i want to know future's 50 days
// date change after 50 days
showDate2.setDate(showDate1.getDate() + 50);
console.log(showDate1);
console.log(showDate2);

showDate3 = new Date("october'13, 2023 11:12:33");
currentdate = new Date(); // current date
// i want to know future's 50 days
// date change after 50 days
showDate2.setDate(showDate1.getDate() + 50);
console.log(showDate3);
console.log(currentdate);

if (currentdate > showDate3) {
  console.log("x is past date");
} else if (showDate3 > currentdate) {
  console.log("x date is future");
} else {
  console.log("x same date");
}

// New Keyword in js
// simple method to make object
var car = {
  carName: "toyota",
  carColor: "black",
  carPrice: "234234RS",
};
console.log(car);

// make object using new keyword
var person = new Object();
person.name = "waheed";
person.lastName = "hussain";
person.age = 21;
console.log(person);

// property getters and setters in js

var person = {
  firstName: "Waheed",
  lastName: "Hussain",
  caste: "Leghari",
  city: "Dadu",

  // use get keyword and make method
  get changeName() {
    // change data in object using get
    // change data or add data snd from object use get method
    return (this.lastName = "Ali".toUpperCase());
  },
  set setName(value) {
    // here value is parameter
    this.firstName = value.toUpperCase();
  },
};
// get value by users use set function
// note if you use set method always
// set value out of the method
person.setName = "hy developer";
console.log(person.setName);
// old way
// person.firstName = "hy developer";
// change value
// call like a property
console.log(person.changeName);
console.log(person);

// OBJECT constructor Function
// normal object

var Student1 = {
  firstName: "Waheed",
  lastName: "Hussain",
  caste: "Leghari",
  city: "Dadu",
};
console.log(Student1);
// what i need 100 students data

// thats why we use object constructor
// object constructor is a blue print of an object
// here class is not work

var Student1 = {
  firstName: "Waheed",
  lastName: "Hussain",
  caste: "Leghari",
  city: "Dadu",
};

// if we make a blue print of an Object we use
// object Constrcutor
// same properties multiple objects

function Students(first, last, cst, age) {
  // function functionName (parameters)
  // is called object constructor
  // passing parameters
  this.firstName = first;
  this.lastName = last;
  this.caste = cst;
  this.age = age;
  // this is object construtor function
}

// there are two ways making real object
// store a new variable
//Syntax
// variableName new Keyword
//Object ConstructorName()

Students.prototype.UniName = "Sindh Uni";
// prototype use for add properties or function
// in object Constructor function
// this is super function
// alos this is upper level function
// using this prototype add properties in
// object Constructor Function
// syntax
// ConstructorName.prototype.AddProperties = Value
// also add methods
// once you add properties in constructor
// properties will add all objects
var Student1 = new Students(
  (first = "Waheed"),
  (last = "Hussain"),
  (cst = "Leghari"),
  (age = 21)
);
// but how to add new property in object construtr function
Student1.Country = "Pakistan"; // add in variable or object
// note here add property in Student1 Object or variable
// also add function
// not add in Object Constructor Function
console.log(Student1);

// second way pass direct arguments in parameters
var secStudentData = new Students("Raheem", "Ali", "Leghari", 33);
console.log(secStudentData);

// Nested Object

var person = {
  firstName: "waheed",
  lastName: "ALi",
  caste: "leghari",
  YorMobleAndLaptop: {
    mobile: "redmi",
    laptop: "hp laptop 840",
    YorCityName: {
      city: "jamshoro",
      oldCity: "dada",
    },
  },
};
console.log(person.firstName);
console.log(person.YorMobleAndLaptop.YorCityName);

// practics all functions and all object in js ==>>

// START FUNCTION ==>>>>>
// simple function
//  syntax => function - functionName(){}
function myName() {
  var name = "Waheed hussain";
  var caste = "leghari";
  var lap = "hp laptop";
  // note print this in function
  console.log(name, caste, lap);
}
// calling function with function name
myName(); // simple function

// function print any table

function printAnyTablee() {
  var i;
  for (i = 1; i <= 10; i++) {
    console.log(`2 X ${i} = ${i * 2}`);
  }
}
// calling function
printAnyTablee();

// object inside the function
function myinfo() {
  var myProperties = {
    firstName: "waheed",
    lastName: "hussain",
    caste: "leghari",
  };
  console.log(myProperties);
}
// calling function
myinfo();

// function add two number
function addtwo() {
  num = 23;
  num1 = 56;
  sum = num + num1;
  console.log(sum);
}
// calling function
addtwo();

// function with parameters and Arguments

// first check simple function
// compare
function comparee() {
  var str1 = "waheedhussain";
  var str2 = "hussain";
  if (str1 == "waheedhussain") {
    console.log("this conditon is true");
  } else if (str2 == "hussain") {
    console.log("first and sec condition is true");
  } else {
    console.log("both conditions are false");
  }
}
// calling function
comparee();
// function with parameters and Arguments
// parameters are like => Variables
// arguments  are like => Values
function prTable(table) {
  // here table is parameters or you can say variable for store arguments
  for (var i = 1; i <= 10; i++) {
    console.log(`${table} X ${i} = ${table * i}`);
  }
}
// calling function
// here 5 is argument or value
prTable(5);
prTable(67); // change any argument function will work

// Add three numbers using paramters arguments
function addthreeNum(num1, num2, num3) {
  // function with parametrs
  // for store all data make new variable
  var result = num1 + num2 + num3;
  console.log(result);
}
// calling function
addthreeNum(23, 45, 67);
// these 1 2 3 are arguments
// same function but values are change with the help of arguments

// check condition using function with parameters and Arguments
function checkit(name) {
  for (var i = 1; i < 5; i++) {
    console.log(name);
    if (name == 0) {
      console.log("loop is not start");
      break;
    }
    if (name == 3) {
      console.log("right now loop in 3rd position");
      break;
    }
    if (name == 4) {
      console.log("right now loop in 4th position");
      break;
    }
    if ((name == 2, 6, 7)) {
      console.log("error");
      break;
    }
    // console.log(name , i);
  }
}
// calling function
checkit(3);

// the Arguments Objects
// argument function has no parameters
// argument function has only Arguments
function argmnt() {
  var getlength = arguments.length; // access all upcoming data's length
  console.log(arguments); // see all data in array
  console.log(arguments[2]); // see data one by one using array index[]
  console.log(getlength); // get all length
}

// calling function
argmnt(23, 3); // first Argument pass two value so length is 2
argmnt(23, 3, 4, 4); // length is 4
argmnt(23, 3, 4, 4, 3);

// addtwo number using function without parameters
// using Arguments object
function addTwoNumberArgumnt() {
  if (arguments.length == 0) {
    console.log("No Arguments Passed!");
  } else {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
      console.log(sum);
    }
  }
}
// calling function with no parameters
addTwoNumberArgumnt(23, 23, 4, 54, 46, 46, 5, 35, 5);
addTwoNumberArgumnt(2, 42, 42, 2, 6, 7);
// same function but values are change
// add multiple arguments as you want

// also you can store function in variable
// Note you can store a function in variable as well
// rule is cannot use fuction brakets()
let storeFuntion = addTwoNumberArgumnt;
storeFuntion(32, 23, 4, 2);

// function with return value

function returnValue() {
  var str = "waheed";
  var str1 = "hussain";
  result = str.concat(str1);
  return result;
}
// function store in store variable
var store = returnValue();
console.log(store);

function returnValue1(st, st1) {
  // parameters pass
  var str = st;
  var str1 = st1;
  result = str.concat(" " + str1);
  return result;
  // if use only return you got undefined
}
// function store in store variable
var store = returnValue1("waheed", "hussain");
console.log(store);

// global variable and local variable

// global variable

var globalvar = "Iam Global variable";
// access any where in the whole program
console.log(globalvar);

// local variable always inside the block scope
// and function
function localvar() {
  var car = "toyota";
  console.log(car);
  // local variable access on its own function
  // but global variale also access in function
  console.log(globalvar);
}
// calling function
localvar();
// in block scope local variable var you can access
// bcz var can not blockscope
// let or const can not access in block scope and function
{
  let localVar = "iam local variable";
  console.log(localVar);
}
// console.log(localVar);
// same variable but different function is allowed
// note function end variable is also deleted thats why same variable allowed

// Anonymous function
// means function with no name
// getting error bcz syntax is wrong
// two solutions
// function (){
//   var num1 , num2;
//   var result = num1 + num2

// }
// first you can store a function in variable
// second you can pass Anonymous like arguments

// first way store in variable
// this way also called Function Expression
// store Anonymous function in variable
var store = function (a1, a2) {
  var a1;
  var a2;
  resulta = a1 + a2;
  return resulta;
};

var c = store(24, 33);
console.log(c);

// sec way Anonymouse function paasng like arugments
// means pass another function
// var passinganotherFu = function (){
// var checkme = '2sec late';
// console.log(checkme);

// }
// function pass like parameters
// setTimeout(passinganotherFu,3000);
// do not store in variable
// direct print Anonymous function
// this is  immdiately invoked function
(function () {
  console.log("run right now");
})();

// Object start

// empty object
var emptyobject = {};
// this is empty object
console.log(emptyobject);

// there are two types of declaring an object
// first way only value in strings
var person = {
  firstName: "Waheed",
  lastName: "Hussain",
  caste: "Leghari",
  city: "Dadu",
};
// also there are two types of access objects or objects properties
// . Notation and Array Notation[]
// First way to access an object with . Notation
// first add property and its value
// person . property name and its value
person.age = 21;
console.log(person); // see full object
// update property's value
person.lastName = "Ali";
// now lastName value us Ali
console.log(person);
// delete property and its value
// use delete keyword
delete person.city;
console.log(person);

// two types of checking value inside the object
// first way check using property if output is undefined
// means value is not in object
person.city;
console.log(person.city); // undefined
// second way using in Operator
// using property name inside the string
console.log("age" in person);
// we dont know how many  properties inside the objects
// use for in loop
for (key in person) {
  console.log(key + ": " + person[key]);
  // all properties and its value
}

// second way both keys and values in Strings
// sec way all operations with [] notation
var person = {
  firstName: "Waheed",
  lastName: "Hussain",
  caste: "Leghari",
  city: "Dadu",
};
// access full object
console.log([person]);
// add property
person["age"] = 32;
console.log(["city"]);
// delete
delete person["city"];
console.log(person);

// Methods in Object in js

// function inside the object is called method
// there are four types of making methods in objects in js
var person = {
  firstName: "Waheed",
  lastName: "Hussain",
  caste: "Leghari",
  city: "Dadu",
  // third way to declared method
  // declare method inside the object like property
  // with function with no name
  imThirdMethod: function () {
    console.log("third way to declare Method");
  },
  // 4th way to declare function inside the object
  // this function come in js E6
  // direct make method inside the object
  imFourMethod() {
    console.log("iam 4th way to declare method");
  },
};
// first way
// object method or variable = function with no name

person.imMethod = function () {
  // here  imMethod is method
  console.log("hy iam first way to declare method");
};
// calling method
person.imMethod();

// sec way to declare method
// first make simple function
// than store in method
function iamFun() {
  console.log("iam second way to declare method");
}
// first step complete
// now store in method
person.storInMethod = iamFun;
// calling a method like function
person.storInMethod();
// method inside the object with no name function
person.imThirdMethod();
// declare method inside the object direct make method
person.imFourMethod();

// this keyword use for object's property or methods
// note this keyword only works on methods or function
var persons = {
  firstName: "Waheed",
  lastName: "Hussain",
  caste: "Leghari",
  ciity: "Jamshoro",
  usethis() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and Caste ${this.caste} lived in ${this.ciity} City`
    );
  },
};
// calling method first call object and using . notation call method
persons.usethis();

// what if i want to change property's value
// normal way
// person.city = 'jamshoro';
// console.log(person.city);
// this is not right way
// use this keyword and change properties value dynamicly

// geter and seter method in js

var laptopFeature = {
  laptopModel: "HP Laptop",
  laptopPrice: "54000Rs",
  laptopscreen: "15.9inch",
  // get
  get changeData() {
    return (this.laptopPrice = "free".toUpperCase());
    // always use return otherwise got undefined
  },

  // set
  set changeSet(value1) {
    // required always one parameter
    this.laptopModel = value1.toUpperCase();
  },
};
// here data set in set method
laptopFeature.changeSet = "Dell Model";
// console.log(laptopFeature.changeSet);
console.log(laptopFeature);
console.log(laptopFeature);
console.log(laptopFeature.changeData);

// object constructor function
function laptopFeature12(lapName, lapprice, laptopscreen) {
  this.laptopModel = lapName;
  this.laptopPrice = lapprice;
  this.laptopscreen = laptopscreen;

  // this is the blue print
}
// add property in Object Constructor Function
// use prototype upper level function
laptopFeature12.prototype.lapSSD = "234SD";
// here this property add all objects

// make real object
// make a new variable to store object cnstrutr function
var storeInNew = new laptopFeature12(
  (lapName = "hp laptop"),
  (lapprice = "244414Rs"),
  (laptopscreen = "screen 1.5inch")
);
console.log(storeInNew);
// addd property
storeInNew.lapRam = "16GB RAM";
// here add property in object or variable not add in constructor function

// Hoisting in js
// means left or pull

// function with out declareation
// got error bcz function is not defined
// define function
hello();
// this is also work in js
// in js interpretr read all files
// than execute
// hoistng pull function up than print
// note Hoisting check only declareation

function hello() {
  console.log("hello ");
  // this is normal
}

// behind the scene in hoisting

// hello(); // calling first
// than declare function

// function hello(){
//   console.log('hello ');
// this is normal
// }

// work in hoisting hoisting
// hoisting check declareation
function hello() {
  console.log("hello ");
  // this is normal
}

hello();

// hoisting in variables
// noraml declareation
// var x ; // declartion
// x = 45; // assigment
// console.log(x); // call
// var x = 24;
// console.log(x);

// but what if i try this

// var x ; // declartion
// output is undefined bcz
// var x = undefined; in js
// console.log(x); // call
// x = 35; // assigment
// this condition

// console.log(x); // check in var = undefined
// out put is undefined

// x = 65;
// var x ;

// this condition

// hoisting pull declaration up
x = 65;
console.log(x);

var x;

// behind in hoisting
// js read all file and check declaration pull up only declaration
var x;
x = 65;
console.log(x);

// var x = 35; here declaration and assigment
// donot pull up bcz here assigment donot pull

// undefind donot inside the let and consts

// "use strict"
// for auto declareation
// x = 34;


// var obj = {
// firstName : 'waheed',
// lastName: 'Ali',
// myfu : function(){
//   var str = 'hy baby';
//   return str;
// }

// }

// var call = obj.myfu();
// console.log(call);

var obj = {
  firstName : 'waheed',
  lastName: 'Ali',
 
  }

  function sayHello(){

    console.log(10);
    // sayHello();
  }
  sayHello()
  
//   function myfu(){


//     str = 'hy baby';
//     console.log(str);
//     console.log('werwerfwefef');

//     }
//     obj.ff = myfu
    
// obj.ff()  
// console.log(obj.firstName);
let  input = document.querySelector("input") ;
let btn = document.querySelector("button");

input.addEventListener("keydown", ( e)=>{
 
  console.log(e);
  console.log(e);
})
