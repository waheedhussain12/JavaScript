// Example of HTML EVENTS
// when a user clicks the mouse
// when a web page has loaded
// when an image has been loaded
// when the mouse moves over an element
// when an input field is changed
// when a HTML form is submitted
// when a user strokes a key

// note there are two types of register an Events
// 1 inline evenets
// 2 AddeventListner

// inline events
function btnClicked(){
    alert('clicked');
}
// addEventListener 
// fist access element for apply event
let eventListener = document.getElementById("eventListener");
// sec now apply any event as you want
// addEventListener have two values 
// 1 which event note "event" pass always in strings
// note in addlistener click event is work not on click
// 2 function name only pass not passing ()
eventListener.addEventListener("click",btnClicked);

// addeventlistener on function with no name

// first access element for event
// save another variable than apply event on it
// with function with no name
let noNameFun1 = document.getElementById("noNameFun");
noNameFun1.addEventListener("click",function(){
//    let newrs = document.createElement("div");
//    newrs.textContent = " hyyyy"
//    noNameFun1.appendChild(newrs);
noNameFun1.innerHTML = "Click me for Show";

});

