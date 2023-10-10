// inline style video 52
let btn = document.querySelector("#btn");
// first way to put css from js ==> style.cssText inline style
// cssText add multiple properties but also overRide all the HtMl properties also
// but using += you can add style from html and js also
btn.style.cssText += "background-color: green; padding : 5px;";
// sec way using SetAttribute ==> inline style
// this is also override and use multiple properties
// btn.setAttribute("style","color: yellow;padding:12px");
// third way change property one by one
// for single style 
// btn.style. background = "red";
// btn.style. padding = "23px";
// btn.style. color = "blue";

// Get computed Style video 53
// for knowing which style apply in any element
// use GetComputed Style
// first get elemnt than store in new variable than console
let h1 = document.querySelector("#h1");
let css = getComputedStyle(h1);
console.log(css.padding,css.color);

// CSS Classes video 54

// first ClassName
 let div = document.querySelector("#div");
 let checkClass = div.className;
console.log(checkClass); // access classNames 

// here give a className also
// here first class is delete sec class is overRide
// use += for class not overRide
// also add space in class
div.className += " addClassFromJS";

// sec way ClassList
let clasList = document.querySelector("#div");
let checkClassList = clasList.classList;
console.log(checkClassList);
for(let i = 0; i < checkClassList.length;i++){
    console.log(checkClassList[i]);
}
// add  or remove class in classList method
clasList.classList.add('box');
clasList.classList.remove("box");
clasList.classList.replace("box","bigBox"); // pass to arguments
// for check class avaliable or not
// value return true or false

let classResult = clasList.classList.contains("color");
console.log(classResult);
// toogle true ==> false and false ==> true
clasList.classList.toggle("toggle");




// for(let css of box.classlist){
    // console.log(css);
// }


// width and height of an element video 55

let width_height = document.querySelector("#div");
// in offset width and height 
// border margin include in offsetwidth and height
let width = width_height.offsetWidth;
console.log(width);
let height = width_height.offsetHeight;
console.log(height);

// but clientwidth and clientheight donot count border and margin
// note padding include both
let width1 = width_height.clientWidth;
console.log(width1);
let height1 = width_height.clientHeight;
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
console.log(height1);
