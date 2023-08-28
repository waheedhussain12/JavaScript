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

