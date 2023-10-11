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
document.body.appendChild(newCloneList)
document.body.appendChild(newCloneList)
document.body.appendChild(newCloneList)
document.body.appendChild(newCloneList)
document.body.appendChild(newCloneList)
document.body.appendChild(newCloneList)