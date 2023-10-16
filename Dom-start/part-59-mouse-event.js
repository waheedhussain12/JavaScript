let btn = document.getElementById("mouse");
// external function
function myfun (){
    let heading = document.getElementById("div");
    heading.textContent = "this is heading added from js function"
    console.log('this is click event');
}
// 1 click event
btn.addEventListener("click",myfun);
// 2 contextMenu
btn.addEventListener("contextmenu",myfun);