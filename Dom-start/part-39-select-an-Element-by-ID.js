


var store = document.getElementById("first");
// if id is wrong return null
// here Parent object is Document
// here .getElementById() ==> is Method
// this is object's Method
// for store all data make new variable and store it
// innerHTML is property which changes the HTML elements value
// here store an element as a object 
// using innerHTML we can get value and also set value as well
var result = store.innerHTML = "Waheed Hussain";
console.log(result);
var changeValue = document.getElementById("last");
// got null if use same varibale and same id means var last = id last
changeValue = changeValue.innerHTML = "<p> Hussain </p>"
// console.log(changeValue);
