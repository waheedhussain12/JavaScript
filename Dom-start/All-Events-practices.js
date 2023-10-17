// 1 inline Event
// for inline make function
function inlineFun(){
   
let heading = document.querySelector(".heading");
heading.innerHTML = "this is Inline Event";
};
// 2 AddEventListener
let addlistenBtn = document.querySelector(".addlistenBtn");
// apply click Event
addlistenBtn.addEventListener("click",addEventFun);
// make function 
function addEventFun(n , n1){
    let pTag = document.querySelector(".pTag");
    let firstName = "Waheed"; 
    let lastName = "Hussain";
    pTag.innerHTML = `${firstName} ${lastName}`

}

