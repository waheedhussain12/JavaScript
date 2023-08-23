// == equal to 
// not compare data type 
// 5 == 5 -> true
// 6 == 5 -> false
// 5 == "5" -> true

let a = 10;
let a1 = 12;
console.log(a==a1);

let b = 13;
let b1 = 13;

console.log(b==b1);
let c = 5;
let c1 = "5";
console.log(c==c1);
//first convert than compare

// === equal value and equal type
// 5 === 5 -> true
// 6 === 5 -> false
// 5 === "5" -> false bcz change data type
let d = 12;
let d1 = 12;
console.log(d===d1);
// d and d1 both are number type condition true than check number are equal
// first compare data type than value
let d2= 12;
let d3 = "string";
console.log(d2===d3);
// first condition is false d2 is number d3 is string
// number and string are not same condition false
let e = 10;
let e1 = 11;
console.log(e===e1);
// type are same one condition is true both are numbers
//but number are not equal so condition are false


//-    != not equal 
// 8 != 5 -> true
// 5 != 5 -> false
// not compare data type 

let f = 20;
let f1 = 20;
console.log(f!=f1);
// f is not equal to f1 but here f is equal == to f1 
// condition is false

let g = 30;
let g1 = 20;
console.log(g!=g1);
// condition is true bcz g is not equal to g1


//compare data type 
//- !== not equal value or not equal type
// 5 !== 5 -> false
// 5 !== "5" -> true
// 5 !== 8 -> true

let h = 12;
let h1 = 13;
console.log(h!==h1);
// h not equal to h1 using != not equal thats why condition is true

let i = 12;
let i1 = "5";
console.log(i!==i1);
// first condition is false but using not equal != conition is true 

// > greater than
// 5 > 8 -> false

let j = 12;
let j1 = 20;
console.log(j > j1);
// j is not big than j1 condition is false

// < less than
// 5 < 8 -> false

let k = 12;
let k1 = 20;
console.log(k <k1);
// k is less than k1 condition is true

// >= greater than or equal to
// 8 >= 8 -> true

let l = 12;
let l1 = 12;
console.log(l>=l1);
// l is not greate than but equal to so condition is true

// <= less than or equal to
// 8 <= 8 -> true

let m = 12;
let m1 = 12;
console.log(m<=m1);
// l is less than but equal to so condition is true


// logical operators
//&& and
// (5<10 && 6>1) true
// (5>10 && 6>1) true
// if both condition are true than condition is true
// if one condition is true and 2nd is false than conditon is false

let n = 10 > 4 && 23 > 6;
console.log(n);
// both conditions are true than output is true

let n1= 10 < 4 && 23 > 6;
console.log(n1);
// first condition is false but 2nd condition is true
// but output is false bcz both conditions true any how


// || or
// (5==5 || 6==5) true
// (7==5 || 6==5) false
// atleast one condition is true output will be true

let o= 10 == 4 || 5 ==5;
console.log(o);
// one condition is true


//-  !not operator
// true convert in false
var q = 12;
var q1 = 12;
console.log(!q==q1);