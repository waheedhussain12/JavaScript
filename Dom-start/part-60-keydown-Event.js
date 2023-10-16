//Keydown and keyup
//The keydown events happens when a key is pressed down, and then keyup – when it’s released. 

// keydown
let store = window.addEventListener("keydown",checkkey);
function checkkey(e){
    // all keyboard value store in e parameter
    console.log(e.key);

}

// keyup
// and then keyup – when it’s released. 
window.addEventListener("keyup",checkkey2);
function checkkey2(e){
    // all keyboard value store in e parameter
    console.log(e.key);

}