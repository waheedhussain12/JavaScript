let btn = document.getElementById("mouse");
// external function
function myfun (){
    let heading = document.getElementById("div");
    heading.textContent = "this is heading added from js function"
    console.log('this is click event');
}
// 1 click event
// btn.addEventListener("click",myfun);
// 2 contextMenu
// contextmenu works on mouse rightSide button
// btn.addEventListener("contextmenu",myfun);
// 3 doubleClick dblclick
btn.addEventListener("dblclick",myfun);