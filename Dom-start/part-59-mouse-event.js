let btn = document.getElementById("mouse");
// external function
function myfun (){
    let heading = document.getElementById("div");
    heading.textContent = "this is heading added from js function"
    console.log('this is click event');
}
// 1 click event
// Does fire through keyboard (enter, spacebar keys for example)
// btn.addEventListener("click",myfun);
// 2 contextMenu
// contextmenu works on mouse rightSide button
// btn.addEventListener("contextmenu",myfun);
// 3 doubleClick dblclick
// btn.addEventListener("dblclick",myfun);
// 4 mousedown 
//Does not fire through a keyboard
// btn.addEventListener("mousedown",myfun);
// 5 mouseup hold relese than show value
// btn.addEventListener("mouseup",myfun);
// 6 mouseOver 
// hover some element value is print
// btn.addEventListener("mouseover",myfun);
// 7 mouseOut
// element out than print
// btn.adddonEventListener("mouseout",myfun);