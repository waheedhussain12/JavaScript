// three output functions
// alert("hy baby");

// let age;

// age = prompt('enter your age');

// if (age <=100) {
//     document.write(`Your age is ${age}`);
    
// } else{

//     document.write('enter age btw 100 numbers');
// }


// let response = confirm(`Are You Sure, You want to Delete`);
// // check response true or false
// if (response) 
// // if response is true print this
// {

//     document.write(`Deleted`);
    
    
// }else{
//     document.write(`Not Deleted`);
// }


// type convrn 

var num = 34;
console.log(num); // here it is number
console.log(typeof num);

var num = "34";
console.log(num); // here it is string
console.log(typeof num);


// numbr + string = num convrt in string 1030
var num = 10 + '30'; // 10 convert in string 1030
console.log(num);
console.log(typeof num);

// numbr + null = 30 and null is 0
var num = 30 + null;
console.log(num); // 30 and null is 0
console.log(typeof num);

// string + null = null convrt in string 49null
var num = '49' + null;
console.log(num); // null convrt in string 49null
console.log(typeof num);

// numbr multiple in alphabats string = NAN
var num = 12 * 'waheed';
console.log(num);
console.log(typeof num);

// numbr multiple string numbrs = numbers
// same as / - % *
// only + are adding string
var num = 33 * '12';
console.log(num);
console.log(typeof num);

// both are string = 2325
var num = '23' + '25';
console.log(num);
console.log(typeof num);

// boolean 
var num = true;
console.log(typeof num);

// but true or false in string
// its string not a boolean
var num = 'true'
console.log(num); 
console.log(typeof num);

// js three functions
//  string() 
//  number()
//   boolean ()


// String
var str = 'hi! iam String in JS'
console.log(str);
console.log(typeof str);

// convert in number 
var str2 = Number(str);
console.log(str2);
console.log(typeof str2);

// convert in Boolean
// note boolean false only blank string " ", ' '
var bool = Boolean(str);
console.log(bool);
console.log(typeof bool);


// number

 var numbr = 40;
 console.log(numbr);
 console.log(typeof numbr);

 // convert in String

 var numbrStr =Number(numbr);
 console.log(numbrStr);
 console.log(typeof numbrStr);

// convert in Boolean
// note only 0 is false 1 to all numbers is true
var numbrBool = Boolean(numbr);
console.log(numbrBool);
console.log(typeof numbrBool);

// Boolean

var bool1 = true;
console.log(bool1);
console.log(typeof bool1);

// convert in String

var boolStr = String(bool1);
console.log(boolStr);
console.log(typeof boolStr);

// convert in Number
// note true means 1 and false means 0
var boolNum = Number(bool1);
console.log(boolNum);
console.log(typeof boolNum);



// String manipulation in js

// Single quote string
var str = 'hy developers im new here';
console.log(str);

// Double quote string
var str = "hy developers im new here";
console.log(str);


// add two strings in 
var str = "you killed a";
var str2 = "cat and dog";
console.log(str + str2);

// add two strig in new 3th variable
var strSave;
strSave = str + str2;
console.log(strSave);

// you can this also result will be same
var strSaveto = `${str +" " + str2}`
console.log(strSaveto);


// types of spacing in Strings

// start in new line
var str = "waheed\nhussain";
console.log(str);

// i want to put this \ inside the text 
// use double \\ 
var str = "waheed\\hussain";
console.log(str);

// i want tab space in my text
var str = "waheed\thussain";
console.log(str);

// use \ and put any signs and symbools inside the text
var str = "waheed\'hussain";
console.log(str);
var str = "waheed\"hussain";
console.log(str);
var str = "waheed\#hussain";
console.log(str);
var str = "waheed\ `hussain";
console.log(str);


// find the length of the string
var str = "you killed a sweet Cat in my house";
console.log(str.length);


// find any letter in string using index []
// spaces are also count
var str = "you killed a sweet Cat in my house";
console.log(str[11]);

// compare two or more strings

var str = "you killed a";
var str2 = "cat and dog";
 if (str !=str2) {
    console.log(str + str2);
    
 } else{
    console.log('you got error');
 }

 // also this way you can compare
 var str = "you killed a";
var str2 = "you killed a";
 if (str ==str2) {
    console.log(str,str2);
    
 } else{
    console.log('you got error');
 }


 // String concat() Function

 // different types of concat in string
 var str = "you killed a";
var str2 = "cat and dog";
console.log(str.concat(" ",str2));


// make new variable and concat 
// also old way add two string using plus +
var str = "you killed a";
var str2 = "cat and dog";
var conCatStr = str.concat("  " ,str2);
console.log(conCatStr);



// 2nd function indexOf ()
// find position only letter
var str = "youi killed a sweet Cat in my house";
// var positon =str.indexOf('k');
// also search form index 

var positon =str.indexOf('i',4);
 // search from 4 letters
console.log(positon);



// 2nd function LastIndexOf()
var str = "youi killed a sweet Cat in my house";
var positon1 =str.lastIndexOf('i',11);
 // search from last side also add position 
console.log(positon1);

// to Lowercase funciton ()
var str = "Youi Killed a sweet Cat in my House";
var positon1 =str.toLowerCase();
console.log(positon1);

// to Upppercase funciton ()
var str = "Youi Killed a sweet Cat in my House";
var positon1 =str.toUpperCase();
console.log(positon1);



// deleting extra space use trim() also use end start function


// let trimdstr =strSubStr.trim();
// let trimdstr =strSubStr.trimEnd();
var str = "  Youi Killed a sweet Cat in my House  ";
var positon1 =str.trim();
console.log(positon1);


// replace () function
// replace and add new value in a string
var str3 = "Youi Killed a sweet Cat in my House";
var positon2 =str3.replace("Cat","Dog");
console.log(positon2);


// includes() tells us in true or false
// word present in a string true or not present false
var str4 = "Youi Killed a sweet Cat in my House";
var positon3 =str4.includes("thanks for everything");
console.log(positon3);

// subString using substr() function
// first put on position than put length
var str6 = "Youi Killed a sweet Cat in my House";
var subtr = str6.substr(4,7);
console.log(subtr);