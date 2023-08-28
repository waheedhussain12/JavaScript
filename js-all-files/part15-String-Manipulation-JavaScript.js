// string manipulation

// string in single quote

// let str = 'waheed';
// console.log(str);

// string in double quote

// let str2 = "hussain";
// console.log(str2);

// two string plus +

// let str = "waheed";
// let str2 = "hussain";
// console.log(str + " "+ str2);

// store value another string

// let str = "string one";
// let str2 = `${str} store in str2`
// // now str value inside str2
// console.log(str2);

// // string in new line use \n

// let str = 'waheed\nhussain';
// console.log(str);


// space in sentence in string
//  use \' \ " put \ in string use double \\ in sentence
// use \ btw strings and put any letter or sign btw them
// let str = 'waheed\\hussain';
// // output waheed\hussain
// console.log(str);

// let str = 'waheed\"hussain';
// // output waheed"hussain
// console.log(str);

// let str = 'waheed\'hussain';
// // output waheed'hussain
// console.log(str);

// let str = 'waheed\@hussain';
// // output waheed@hussain
// console.log(str);


// tab space use t

// let str = 'waheed\thussain';
// // output waheed"hussain
// console.log(str);

// string lenght find
// spaces are also count
let strlength = 'waheed hussain ';
console.log(strlength.length);

// find any letter in strin using index

let strlength1 = "laptop mobile waheed anything";
console.log(strlength1[5]);
// find any letter position using index[]


// compare strings

let strCompr = 'Waheed';

let strCompr1 = 'Waheed'; //  if w is small letter got error
if (strCompr == strCompr1) {
    console.log('String are Equal');
    
}else{
    console.log('Not Equal');
}

// string concat() function

// let strr1 = "this is a";
// let strr2 = "ballbat";
// let strr3 = "but its not my fav game";
// // also add 3th variable for store bth values
// let strrCncat;

// strrCncat = strr1.concat(" ",strr2," ",strr3);
// console.log(strrCncat);



let strSubStr = "this is a JavaScript video. It is a good video";

// let subString = strSubStr.substr(10,16);
// // first yu set position than yu set lenght
// // positon count start 0 and lenght start count 1
// console.log(subString);

// 2nd function indexOf ()
let positon1 = strSubStr.indexOf('good'); // words position
console.log(positon1);

let positon3 = strSubStr.indexOf('is', 10); // search from 10 letters
console.log(positon3);






// 2nd function LastIndexOf()
let positon2 = strSubStr.lastIndexOf('is'); // search from last 
console.log(positon2);
 
// deleting extra space use trim() also use end start function


// let trimdstr =strSubStr.trim();
// let trimdstr =strSubStr.trimEnd();
let trimdstr =strSubStr.trimStart();
console.log(strSubStr);
console.log(trimdstr);

// to Upppercase funciton ()
// let toUppercase =strSubStr.toUpperCase();
let toUppercase =strSubStr.toLowerCase();
console.log(strSubStr);
console.log(toUppercase);


// replace () function
// replace and add new value in a string
let toreplace =strSubStr.replace('video','best Video');
let toInclude =strSubStr.includes('video');

console.log(strSubStr);
console.log(toInclude);



