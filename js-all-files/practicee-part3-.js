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