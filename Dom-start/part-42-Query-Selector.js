// query selector select element like css
var selectElement = document.querySelector("p.intro");
// here if two same class in div querySelector Apply only first Element
selectElement.innerHTML = 'if two or more classes are same query selector select first element';
console.log(selectElement);

// if you select all same class element use query selector
// use query selectorAll 
var selectAllElement = document.querySelectorAll("h1.intro");
// here if two same class in div querySelector Apply only first Element
// selectElement.innerHTML = 'Select All same classes element using query selectorAll Also use loop';
console.log(selectAllElement);
for(var i = 0; i < selectAllElement.length; i ++){

    console.log(selectAllElement[i].innerHTML = 'Select All same classes element using query selectorAll Also use loop');
}