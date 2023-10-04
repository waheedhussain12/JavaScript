// topic String

var str = 'waheed hussain';
var str2 = 'leghari';
console.log(str);

var store = str ;
console.log(store);

var addStr = str.concat(` ${str2}`);
console.log(addStr);

strSpace = 'this is my\"laptop';
console.log(strSpace.length);
console.log(strSpace[4]);

var addtwoStr = str + str2;
console.log(addtwoStr);

if (str == "waheed hussain") {
    console.log('this is true');
}else if(str2 == 'leghari'){
console.log('this is also true');
}else{
    console.log('got error');
}

var pra = "this is my lovely dog ";
console.log(pra);
var lastindx = pra.lastIndexOf('my');
console.log(lastindx);
var checkByword = pra.indexOf('my');
console.log(checkByword);
var checkByNumber = pra.indexOf('my',3);
console.log(checkByNumber);
var includesStr = pra.includes('this');
console.log(includesStr);
var replaceStr = pra.replace('my','MY')
console.log(replaceStr);

var lowercaseStr = pra.toLowerCase();
console.log(lowercaseStr);
var UpppercaseStr = pra.toUpperCase();
console.log(UpppercaseStr);
var strtrm = pra.trim();
console.log(strtrm);


// array
arr = ['waheed','hussain',23,true];
arrOneElement = arr;
checkArr = arr.length;
console.log(checkArr);
console.log(arrOneElement[2]);
arrAdd = arr.push('Ali');
console.log(arrAdd,arr);
arrDel = arr.pop();
console.log(arrDel);
console.log(arr);
var adddelete = arr.shift('delete me on first');
console.log(arr);
var addOnFirst = arr.unshift('add me on first');
console.log(arr);
var indOfArr = arr.indexOf('hussain');
console.log(indOfArr);
var arrdeleteAnyElement = arr.splice(0,1);
console.log(arrdeleteAnyElement);
var checkArr = arr = Array.isArray((arr));
console.log(checkArr);

arr2d = ['yellow','red','black',
['my color is black',['nesting array']],
[32]
];
console.log(arr2d);
console.log(arr2d[3][1]);

getlen = arr2d.length;
for(var i = 0; i < getlen; i ++){
    console.log(i,arr2d[i]);
    

}
var pra1 = ["this is my lovely dog ", 23,56];
var arrjoin = pra1.join(" ");
console.log(arrjoin);
var pra2 = "this is my lovely dog ,23,32,46,67,78";
var arrsplict = pra2.split(',');

console.log(arrsplict);
var sttr = pra2.substr(0,4);
console.log(sttr);

// function

// simple function
function sayMyName(){

    var str = 'my name is waheed hussain';
    console.log(str);
}
sayMyName();

// function with parameter and argumnts
function printSomeTing (name ,name2){
var result = name + name2;
console.log(result);
}
printSomeTing('waheed','Ali');
printSomeTing(23,56);

// Anaymouse function
var storeFun = function (){
    console.log('function with no name');
}

storeFun();

// function with return value
function valueReturn(saySome,number){
    var str = saySome;
    var num = number;
    return saySome + number;

}
var returnStore = valueReturn("returned value numbe is : ",24);
console.log(returnStore);

// Arguments object in function
function argumntFun(){
    var storeItems = 0;
  var getlenArg =   arguments.length;
  for(var i = 0 ; i < getlenArg; i++){
     
    storeItems = storeItems + arguments[i];
    
  }
  console.log(storeItems);
//   console.log(getlenArg);
//     console.log(arguments);
}
argumntFun(1,2,2,3,4);
argumntFun("waheed",'hussain','leghari');
// argumntFun(23,3);


//global vs local
let x = 'waheed';
console.log(x);

function localFun (){
    let x1 = 'hussain';
    console.log(x1);
    console.log(x);
}
// console.log(x1);
localFun();

(function (num1 , num2){
    console.log('execute right now');
    result = num1 * num2;
    console.log(result);
    return result
})(2,10);


// constructor function in object

function constructorFun (first , last , caste , age){
    this.firstName = first;
    this.lastName = last;
    this.caste = caste;
    this.age = age;
}

var secWay = new constructorFun(first = 'Ali',last = 'Mohammad',caste = 'Leghari',age = 23,);
console.log(secWay);
constructorFun.prototype.dept = 'sindh uni';
var giveValue = new constructorFun(
first = 'Waheed',
last = 'Hussainn',
caste = 'Legharii',
age = 21,
);
giveValue.gender = 'male'
console.log(giveValue);
var giveValue2 = new constructorFun(
    first = 'raheem',
    last = 'Ali',
    caste = 'bolach',
    age = 21,
    );
    console.log(giveValue2);
  
    // geter seter

    var person = {

        name : 'waheed',
        age : 'thirtyone',
        get myName(){
            var check = this.name = 'waheed hussain'.toUpperCase();
            return check;
        },
        set setAge(value){
             this.age = value.toUpperCase();
        },
        
    };
     person.setAge = 'wedwdwdwed';
   
    console.log(person.setAge);
    console.log(person.myName);
   

    // hoisting
    // var number = 12;
    // console.log(number);
    
    // var number;
    // console.log(number);

    // number = 12;

    // number = 12;

    // console.log(number);
    // var number ;

    // console.log(number);
    // var number = 23;
    number()
    function number(){
        console.log('hyyyyy');
    }
// number()
// let n ;
// console.log(n);
// n = 23;

// n = 23;
// console.log(n);
// let n;