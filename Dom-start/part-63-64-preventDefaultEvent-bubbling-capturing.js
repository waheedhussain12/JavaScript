// Event Bubbling and Event Capturing

// 1 Event Bubbling
//order
/// button => div => body =>html =>document
/// 1 button => 2 div => 3 body => 4 html => 5 document
// most inner Element run First in Event Bubbling
//  false means Event Bubbling
// note first run child than parents
// bottom to top

// 1 Event Capturing 
// not first run parent than childs
// ordr
/// 5 button => 4 div => 3 body => 2 html => 1 document
// most outer Element run First in Event Capturing 
// true means Capturing
// top to bottom

// addEventListener(event,function,usecapture)
// the default value is false means Event Bubbling
let divParent = document.getElementById("myDiv");
let btn = document.getElementById("btn");
divParent.addEventListener("click",divClick )
btn.addEventListener("click",btnClick)
// but i want to run only btn use stopPropagation() in  function
document.body.addEventListener("click",bodyClicked);
// here by default value is false
// means bubbling Event 
//div
function divClick(){
console.log("Div clicked");
}
// btn
function btnClick(e){
    console.log("btn clicked");
    e.stopPropagation();
}
// body
function bodyClicked(){
    console.log("body clicked");
}

// PreventDefault(); vid 64
// preventDefault stop Dom any events
// chnge default behvir 
let link = document.getElementById("link");
link.addEventListener("click",function(e){
    console.log("linked Clicked...");
e.preventDefault();
});
let myForm = document.getElementById("myForm");
myForm.addEventListener("submit",function(e){
    console.log("Form Submited...");
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
e.preventDefault();
});
