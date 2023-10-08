let elm = document.querySelector('#intro');
// access the parent element
let spanTag = document.createElement("span");
// make any html tag 
let text1 = document.createTextNode("this is span tag");
// than give a value and also make new variable for store a tag's value
spanTag.appendChild(text1);
// than connect means appendChild to link tang and value
elm.appendChild(spanTag);
// than link tag with parent

let parent = document.querySelector('#intro');

let div = document.createElement("div");

let text3 = document.createTextNode("iam learning web development by my self");
div.appendChild(text3);

div.id = "jsDiv"

parent.appendChild(div);
// add new element in div
let getDiv = document.querySelector("#jsDiv");
let h2 = document.createElement("h2");
let text5 = document.createTextNode("this value from js side");
h2.appendChild(text5);
getDiv.appendChild(h2)

let h1 = document.querySelector("h1");

let p = document.createElement("p");
let text = document.createTextNode("this is p tag ");
p.appendChild(text);
h1.appendChild(p);
p.className = "ptag secClass";
p.id = "ptag_id";
