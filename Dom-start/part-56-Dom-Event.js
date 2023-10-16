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

let multipleEvents = document.getElementById("multipleEvents");
multipleEvents.addEventListener("click",function(){
    let div = document.querySelector(".div");
    console.log("here clicked event");
    div.textContent = "thanks for calling me";
});

let mouseOver = document.getElementById("multipleEvents");
mouseOver.addEventListener("mouseover",function(){
    let div = document.querySelector(".div2");
    console.log("here mouseOver event");
    div.textContent = "mouseOver ";
});

let mouseOut = document.getElementById("multipleEvents");
mouseOut.addEventListener("mouseout",function(){
    let div = document.querySelector(".div3");
    console.log("here mouseOut event");
    div.textContent = "this is mouseOut ";
});