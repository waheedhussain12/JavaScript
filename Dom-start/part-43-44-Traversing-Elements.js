// first using child id select parent Element

// first get child

// child to parent selecting
// var childToParent = document.getElementById('intro');
// var prt = childToParent.parentElement;
// if you give value in element 
// now parent's value is changed and child's are deleted
// prt.innerHTML = 'child to Parent';
// console.log(prt);


// parent to First child selection
// var parentToFirstChild = document.getElementById("parent");
// var firstChild = parentToFirstChild.firstElementChild;
// firstChild.innerHTML = "Parent to first Child Selecting"
// console.log(firstChild);

// Parent to last child selection 

// var parentToLastChild = document.getElementById("parent");
// var LastChild = parentToLastChild.lastElementChild;
// LastChild.innerHTML = "Parent to Last Child Selecting"
// console.log(LastChild);


 // parent to children selection 
 // all child selection
//  var parentToChildren = document.getElementById("parent");
// var pChildren = parentToChildren.children;
// console.log(pChildren[1]); 
// for(var i = 0; i< pChildren.length; i ++){
//     pChildren[i].innerHTML = "Parent to children means all childs are selected"
//     console.log(pChildren);

// }


// Siblings selection
// previousElementSiblings means element's upper element

var sib = document.getElementById("sib");
var setSib = sib.previousElementSibling;
console.log(setSib.innerHTML= "Selecting upper one element");

// Selecting next element
var sib1 = document.getElementById("sib");
var setSib1 = sib1.nextElementSibling;
console.log(setSib1.innerHTML= "Selecting my next element");

// video 44 innerHTML
// first fetch data and than change data


var fetchData = document.getElementById("Nhtml");
var getData = fetchData.innerHTML; // here fetch data
console.log(getData);
fetchData.innerHTML = "<h1>now channing data </h1>"; 
console.log(fetchData);