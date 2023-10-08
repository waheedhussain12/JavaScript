let parent = document.body;
let addHeading = document.createElement("h2");
addHeading.textContent = " this is NavBar";
let ul = document.querySelector("#navbar");
parent.insertBefore(addHeading,ul); 
// note alwasy first arrgumnt is addContent or value than position ul

let addlist = document.querySelector("#navbar"); // parent
// add list tag in ul
let makeList = document.createElement("li");// make new tag
// give value in li
makeList.textContent = " Gallery in JS"; // give value in new tag

let pos = addlist.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling // select position of an eleme t
// add value or insert before function apply
addlist.insertBefore(makeList,pos)

let parent1 = document.querySelector("#navbar"); // parent


let newValue = document.createElement("li");  // new tag
newValue.textContent = "Click in "; // new tag's value
// this is appendChild always add value in last
// parent1.appendChild(newValue);

// insert before function two values parent and position

let position = parent1.firstElementChild.nextElementSibling.previousElementSibling.nextElementSibling.nextElementSibling;
parent1.insertBefore(newValue, position)





















