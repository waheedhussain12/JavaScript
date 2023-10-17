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