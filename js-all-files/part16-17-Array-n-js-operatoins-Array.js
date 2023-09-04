// normal declaration

let book1 = "Math";
var book2 = "Physics";
var book3 = "Bio";
var book4 = "Computer Science";
// update an variables
book1 = "sec-year Math"
console.log(book1);


// add multiple data in array
var book = ["Math", "Physics","Bio","Computer Science"];
// print full array
console.log(book);
// access particular one elemnet use index
console.log(book[1]);
console.log(book[3]);
//also change or upade value in element using index
book[0] = "English";// update value
console.log(book);
book[2]= 23; // update number also
console.log(book);

// find length in Array
console.log(book.length);

// add element in array using push() function 
// using push you can add element only on last
book.push('Urdu');
console.log(book);

// also you can add element in starting of in Array

// using unshift() function
book.unshift('add me on Start Chemistry');
console.log(book);

// also you can delete an element in Array 

// using pop() you can delete multiple elements also 
// pop() delete from last 
book.pop() // delete last element
console.log(book);
book.pop() // delete sec last element
console.log(book);

// delete element using shift () function 
// shift() delete from first than sec than third 

book.shift(); // first element deleted
console.log(book);
book.shift(); // Sec element deleted
console.log(book);

var book = ["Math", "Physics","Bio","Computer Science","urdu"];
console.log(book);
// you can delete any elemet using splice function
// splice() works on position means start and deleteCount
book.splice(1,1) // index 1 element and count 1 is deleted
console.log(book);
var book = ["Math", "Physics","Bio","Computer Science","urdu"];
console.log(book);
book.splice(1,3) // index 1 element and count 3 is deleted
console.log(book);

// also you can empty Array
book = [] // now array is empty
console.log(book);
// aslo you can try this method
// using length function
book.length = 0;
console.log(book);

var book = ["Math", "Physics","Bio","Computer Science","urdu"];
console.log(book);


// you can also find position of an elemet
// also make a variable to store a positon's value
 let position = book.indexOf("Bio");
 console.log(position); // find element position
 // try this way also using log()
console.log(book.indexOf("Computer Science"));


var book = ["Math", "Physics","Bio","Computer Science","urdu"];
// using this function you can check it is Array or not
// Array.isArray() works on true or false
console.log(Array.isArray(book));
var book = "Math";
console.log(Array.isArray(book));

// String text convert an Array use split() Function 
// split function works on space 
var strText = " this is a random text";
var WordArray = strText.split(' ');// convrt in Array
var WordArray = strText.split('s');// convt in Array but delete all s in String than split it

console.log(WordArray);


// Array convert in to an String use join() Function


var book = ["Math", "Physics","Bio","Computer Science","urdu"];
var arrtoString = book.join(" ");// add space or any letter in double quotes
console.log(arrtoString);

// add two or more Arrays 
// using concat() function
var book = ["Math", "Physics","Bio","Computer Science","urdu"];
var book2 = ["English","German"];
var additionTwoArray  = book.concat(book2);
console.log(additionTwoArray);


// multi dimensional array
// array of an array
var multiarr = [
    ["name","Waheed", ["caste","Leghari"]],
["Age",23],
["Dept","ComputerScience"],
["RollNo:",88]
];
// console.log(multiarr);
var fetchArr = multiarr[0][2][1]; // nesting in array
// var fetchArr = multiarr[1]; // print full array use only outer arry index

console.log(fetchArr);


// use loops in array

var book = ["Math", "Physics","Bio","Computer Science","urdu",23];

// array length does not know first make variable than get array length usinng length property
var bookLength = book.length;
// store array length in our variable
for(i = 0; i < bookLength; i++){
    console.log(i,book[i]);
    

}

// forEach loop in array

var book = ["Math", "Physics","Bio","Computer Science","urdu",23];

book.forEach(myFunction);

function myFunction(getValues){

    console.log(getValues);
}






















// let asset = [1,2,43,546,"Number in Array",76,78,987,3,23,123];
// console.log(asset);  // full array
// console.log(asset[4]); // 4th element










// Array in js

// two types of declaring in Array

// var arr = ["waheed", "hussain","leghari",23];
// // print array
// console.log(arr);
// // add element in array
// arr.push("fav-car");
// // print to see changes in array now
// console.log(arr);
// // find lenght of an array
// console.log(arr.length);
// // Delete element using pop() function but delete last element in array
// arr.pop()
// console.log(arr);

// // sec way declare an Array
// var arr = new Array("waheed", "hussain","leghari",23)
// var arr = new Array("waheed", "hussain","leghari",23)
 var arr = new Array("waheed", "hussain","leghari",23)
 // var arr = new Array("waheed", "hussain","leghari",23)

  // var arr = new Array("waheed", "hussain","leghari",23)
  // var arr = new Array("waheed", "hussain","leghari",23)
   // var arr = new Array("waheed", "hussain","leghari",23)
    // var arr = new Array("waheed", "hussain","leghari",23)
     // var arr = new Array("waheed", "hussain","leghari",23)
      // var arr = new Array("waheed", "hussain","leghari",23)
 
 
 
 
 