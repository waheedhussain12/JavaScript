// AppendChild is done here
// Direct Body ==>>

let body = document.body; // body or parent
let h1 = document.createElement('h1'); // create new tag
h1.textContent = "Learning Manipulation Html Elements"; // put value in created element
// also check value
console.log(h1);
// connect or append means add in html body
body.appendChild(h1);

// apendChild()
let mainDiv = document.querySelector('#mainDiv');
let heading = document.createElement("h3");
heading.className = 'h3'
let text = document.createTextNode("hello developer");
heading.appendChild(text);
mainDiv.appendChild(heading);

// Insert Before
let ulParent = document.querySelector("#ulParent");
let addElement = document.createElement("li");
addElement.textContent = "this is furits List";
addElement.id = 'fruit'
// now apply insert Before function
// best way is to make new Variable 
let pos = ulParent.firstElementChild;
ulParent.insertBefore(addElement,pos)
// you can pass direct arguments as well
// ulParent.insertBefore(addElement,ulParent.firstElementChild.nextElementSibling.previousElementSibling);

// insert Before in body
let mainBody = document.body;
let addSecElement = document.createElement("h4");
addSecElement.textContent = "learning from youtube";
// apply insert before
mainBody.insertBefore(addSecElement,mainBody.firstElementChild);

// Remove Child Element
let removeOneElement = document.querySelector("#ulParent");
// make new variable for store value
let removeC = removeOneElement.firstElementChild;
removeOneElement.removeChild(removeC.nextElementSibling)
// apply direct 
// removeOneElement.removeChild(removeOneElement.firstElementChild)

// also Delete parent as well
//note main and only first parent is body
// document.body.removeChild(removeOneElement)

// clone Element
let cloneUl = document.querySelector("#ulParent");
let newCloneList = cloneUl.cloneNode(true);
// cloned list store in newCloneList
// cloned id changing
newCloneList.id = "try"
document.body.appendChild(newCloneList)


// Repractices All DOM topics
// one Select Element by ID
let selectID = document.getElementById("selectID");
console.log(selectID);
// value change 
let valueChange = selectID.innerHTML = "value change by selecting id";
console.log(valueChange);
// two Select Element by CLassName
let selectClassName = document.getElementsByClassName("selectClassName");
// check in console
console.log(selectClassName.innerHTML = 'value change from claasName');
console.log(selectClassName.length);
// if you show change in web screen use loop

for(let i = 0; i<selectClassName.length; i ++){
  let classCeck =   selectClassName[i].innerHTML = 'change vlaue using loop in className';
console.log(classCeck);
}
// use two classes on different elements
let twoSameClassNames = document.getElementsByClassName("selectClassName secClass");
console.log(twoSameClassNames);
// one same class ignored same two classes element is show
for(let i = 0; i<twoSameClassNames.length; i ++){
    let classCeck1 =   twoSameClassNames[i].innerHTML = 'Same two classes values ';
  console.log(classCeck1)
}
// three Select Element by TagName

let TagNameAll = document.getElementsByTagName("h5");
console.log(TagNameAll);
// for data change use loop
for(let i = 0; i < TagNameAll.length; i++){
    TagNameAll[i].textContent = "here put Data using TagName";
    console.log(TagNameAll.length);
}
// access element inside the div or any contanier
let mainDiv1 = document.getElementById("TagDiv");
console.log(mainDiv1); // here get parent
let allInsideTags = mainDiv1.getElementsByTagName("h3");
console.log(allInsideTags);
// for data change use loop 
for(let i = 0; i < allInsideTags.length; i++){
    allInsideTags[i].textContent = "select All h3 inside parent div"

}
// topic four Query Selector and Query selector All
// note select any element like css selection
let spanId = document.querySelector("#spanId");
// id select
console.log(spanId);
spanId.innerHTML = "this is span tag value from js";
let h6Query = document.querySelector(".h5Query");
// class select
console.log(h6Query.textContent = "give data using query selector");
let tagP = document.querySelector("p");
console.log(tagP.innerHTML = "this is p tag and data from js");
// select parent and access child elements
let queryDiv = document.querySelector("#queryDiv");
let childQuery = queryDiv.querySelectorAll("h3");
console.log(childQuery);
for(let i = 0; i < childQuery.length; i++){
console.log(    childQuery[i].innerHTML = "this is child h3 tags give Data from QueryAll selector");
    
}
// Traversing Elements

//Firstchild to parent
let childh1 = document.querySelector(".childh1");
let ctoParent = childh1.parentElement; // using parentElement Method
// note if you give value childs are delelted
// ctoParent.innerHTML = " this is child to parent"
console.log(ctoParent);

// parent to FirstChild
let divparent = document.querySelector(".divparent");
let ptoFirstchild = divparent.firstElementChild;
console.log(ptoFirstchild);

// parent to lastChild
let parenttolast = document.querySelector(".divparent");
let ptoLastChild = parenttolast.lastElementChild;
console.log(ptoLastChild.innerHTML = " this is last child");

// parent to childrens
let parentToChildrens = document.querySelector(".divparent");
let ptoChildrens = parentToChildrens.children;
console.log(ptoChildrens);
for(let i = 0; i < ptoChildrens.length; i++){
   console.log( ptoChildrens[i].innerHTML);
}
// Siblings element
let sibp = document.querySelector(".childh1");
// let thirdElement = sibp.parentElement // get parent
let thirdElement = sibp.nextElementSibling.nextElementSibling // access next next elements in list
console.log(thirdElement);

let preElement = document.querySelector(".child2");
let preE = preElement.previousElementSibling; // access previous element
console.log(preE);

// create and append elements

// this is 3 step process 
// first access parent 
// second make new variable and also give a value
// and also many ways to give a value to the element
// last step is append child in parent

// Access the Parent
let createAppend = document.querySelector(".createAppend");
// Create an Element 
let headingH1 = document.createElement("h1");
// create a textnode and also give a value for created new (Element)
let textNode = document.createTextNode("iam learning create and append child topic");
// now connect the created Element and textNode 
headingH1.appendChild(textNode);
// now Append to the parent
createAppend.appendChild(headingH1);
// always append 
// also give created Element className or ID
// and there are two methods given id and classes
// first method using 
// headingH1.className = "headingOne";
// headingH1.id = "unique";
// second method classList
headingH1.classList.add("headingOne");

// sec Example 
let createParent = document.querySelector(".createAppend");
let headingH2 = document.createElement("h2");
headingH2.textContent = "this heading created in js ";
createParent.appendChild(headingH2);
headingH2.className = "headingH2"


// append in body
let body1 = document.body; // access body
let bodyElement = document.createElement("h4"); 
let bodyNode = document.createTextNode('this element created for Main body');
bodyElement.appendChild(bodyNode);
// same process
// last append in body
document.body.appendChild(bodyElement);

// Insert Before
let insertBeforeParent = document.querySelector("#insertBeforeParent");
let insertBeforeCreateElement = document.createElement("h3");
let item = document.createTextNode("this item added from insertBefore");
insertBeforeCreateElement.appendChild(item);
let position = insertBeforeParent.firstElementChild.nextElementSibling.previousElementSibling;
insertBeforeParent.insertBefore(item,position);

// remove element and clone element
let removeElement = document.querySelector("#removeAndClone");
 let checkRemove = removeElement.firstElementChild;
 checkRemove.removeChild
 console.log(checkRemove);
