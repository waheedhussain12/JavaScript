let parentUl = document.querySelector('#menu'); // access parent element
let removeElement = parentUl.firstElementChild.nextElementSibling; 
//remove as you want
// than parent element's select child for remove
// than store an other variable 

parentUl.removeChild(removeElement);

// also delete ful ul and its all Elements

// let removeFullElement = document.body.removeChild(parentUl);
// remove ful ul

let parent1 = document.querySelector('#menu');
let clone = parent1.cloneNode(true); 
// if you clone only parent just use simple cloneNode()
// but if you want to clone full parent and its childs pass true cloneNode(true)
// console.log(clone);
clone.id = "newlist";
// note always append in body
document.body.appendChild(clone)