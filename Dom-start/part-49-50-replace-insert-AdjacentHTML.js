let parent1 = document.querySelector("#mainDiv");
let item = document.createElement('li');
item.textContent = "this is replaced list";
// best practice is make new variable than store it
// let replaceItem = parent1.replaceChild(item,parent1.firstElementChild)
// also this way
let replaceItem2 = parent1.firstElementChild;
parent1.replaceChild(item,replaceItem2)
// this is direct apply
// parent1.replaceChild(item,parent1.firstElementChild.nextElementSibling)

// AdjacentHTML
let AdjacentHTML = document.querySelector("#mainDiv");
let value = '<li> add from adjacent </li>';
let value2 = '<h2>awesome Element </h2>';
let value3 = document.createTextNode('hyyyy')
AdjacentHTML.insertAdjacentHTML("beforebegin",value3)
AdjacentHTML.insertAdjacentHTML("afterend",value)
AdjacentHTML.insertAdjacentHTML('beforebegin',value2)
