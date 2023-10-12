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

