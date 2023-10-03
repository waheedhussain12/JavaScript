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
var checkByword = pra.indexOf('my');
console.log(checkByword);
var checkByNumber = pra.indexOf('my',3);
console.log(checkByNumber);
var includesStr = pra.includes('this');
console.log(includesStr);
var replaceStr = pra.replace('my','MY')
console.log(replaceStr);


