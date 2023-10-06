var store = document.getElementsByClassName("samelist");
// here we can check elements length as well
// if you use same class in different Elements use for loop

console.log(store.length);
for(var i = 0; i < store.length; i++){
var result = store[i].innerHTML = "this is same class";

}
console.log(result);

// if you use one element's two or more class than innerhtml change only two class property's value

var sameClass = document.getElementsByClassName("cl p");
var getLen = sameClass.length;
console.log(getLen); // here get length
// if you want to change element's value use for loop
for(var i = 0; i < getLen; i++){
var result2 = sameClass[i].innerHTML = 'two classes use different elements';


}
console.log(result2);