// 1 inline Event
// for inline make function
function inlineFun(){
   
let heading = document.querySelector(".heading");
heading.innerHTML = "this is Inline Event";
};
// 2 AddEventListener first way
let addlistenBtn = document.querySelector(".addlistenBtn");
// apply click Event
addlistenBtn.addEventListener("click",addEventFun);
// make function 
function addEventFun(){
    let pTag = document.querySelector(".pTag");
    let firstName = "Waheed"; 
    let lastName = "Hussain";
    pTag.innerHTML = `${firstName} ${lastName}`;

}
// AddEventListener second way
// make function with no name or direct pass
let addlistenBtnWithNoName = document.querySelector(".addlistenBtnWithNoName");
addlistenBtnWithNoName.addEventListener("click",function(){
let pTagWithNoName = document.querySelector(".pTagWithNoName")
pTagWithNoName.innerHTML ="hy developers babies" 

});

// RemoveEvent Listener
// make external function

// DomContectLoaded
window.addEventListener("DOMContentLoaded",function(){
    console.log('Dom tree created');
});
// load
window.addEventListener('load',function(){
    console.log("first all files is loaded than show");
});

let loadh1 = document.querySelector("#loadh");
loadh1.addEventListener("load",function(){
    console.log("this is load on element");
});

// mouse Event in js

// first access the Element
// make function for add event listener
let mouseEve = document.querySelector(".mouseEve");
function myMouseAllFun(){
    let divHeading = document.querySelector(".div");
divHeading.innerHTML = "this is Mouse Event all Function";
divHeading.style.background = "green";
divHeading.style.padding = "12px";

}
// 1 mouseOver
// passing function without parameter 
mouseEve.addEventListener("mouseover",myMouseAllFun);


// 2 mouseOut 
function mouseOut (){
    let divHeading = document.querySelector(".div");
divHeading.innerHTML = " if you over the mouse Value is Deleted!";
divHeading.style.background = "yellow";
}
mouseEve.addEventListener("mouseout",mouseOut);

// 3 Contextmenu 
// context menu works on right side of the mouse button
let contextMenu = document.querySelector(".contextMenu");
contextMenu.addEventListener("contextmenu",function(){

contextMenu.style.padding = "12px";
contextMenu.style.color = "orange";
contextMenu.style.background = "red"

}) ;

// 4 DoubleClick dbl Event in Mouse
let doubleEvent = document.querySelector(".doubleEvent");
// addEventListner 
doubleEvent.addEventListener("dblclick",function(){

    let newElement = document.createElement("h3");
    newElement.textContent = " this is double Event Mouse";
    doubleEvent.appendChild(newElement);
    newElement.style.background = "pink";
    newElement.style.padding = "10px";



});


// 5 mousedown 
// mouse down works only mouse button not work on keyboards keys
// doubleEvent.addEventListener("mousedown",function(){
// console.log("this is mouse down");

// });
// 5 mouseup
// hold relese than show value
// this also works on keyboards keys
doubleEvent.addEventListener("mousedown",function(){
    console.log("this is mouse up");
});


//Keydown and keyup

// keydown 
window.addEventListener("keydown",function(event){

    console.log(event.key);


})