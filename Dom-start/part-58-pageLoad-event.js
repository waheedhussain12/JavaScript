// DOMContentLoaded the browser fully loaded HTML and completed building the DOM tree.
// however, it hasn't loaded external resources like styleheets and images. 
// in this event you can start selecting DOM nodes or initialize thee interface

// LOAD the browser fully loaded the HTML and also external resources
// like images stylesheets 

// DomContentLoaded and Load use window not doucment
window.addEventListener('DOMContentLoaded',function(){
    console.log('Dom tree created');
})

window.addEventListener('load',function(){
    console.log('fully loaded created');
})


// you can target paricular element as well using Load 
// once element fully loaded than show

let h2load = document.querySelector("#h2load");
h2load.window.addEventListener("load",function(){
    console.log("fully loaded");
})