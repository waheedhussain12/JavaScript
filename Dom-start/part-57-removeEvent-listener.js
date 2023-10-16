let removeElementt = document.querySelector("#removeElement");
function value(){
    let body = document.body;
    let h1Element = document.createElement("h1");
    h1Element.textContent = "iam added from js";
    h1Element.style.background = "yellow";
body.appendChild(h1Element);

}


function value2(){
    let body = document.body;
    let h1Element = document.createElement("h1");
    h1Element.textContent = "iam another element added from js";
    h1Element.style.background = "green";
body.appendChild(h1Element);

}
// addremoveEventListener apply on conditions
removeElementt.addEventListener("click",value);
removeElementt.addEventListener("click",value2);
removeElementt.removeEventListener("click",value);