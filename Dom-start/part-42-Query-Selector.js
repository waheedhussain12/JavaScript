let body = document.body;
body.style.cssText = " margin: 0;padding: 5px;box-sizing: border-box;";
let container = document.createElement("div");
container.classList.add("divContainer");
container.style.cssText =
  "background-color : pink; display : flex;  align-items: center; justify-content:space-between;padding : 0 40px";
body.appendChild(container);
// main div ==> container
let logo = document.querySelector(".divContainer");
let logoText = document.createElement("h2");
logoText.textContent = "LoGo";
logo.appendChild(logoText);
let websiteName = document.querySelector(".divContainer");
let webtext = document.createElement("h1");
webtext.textContent = "website Name";
websiteName.appendChild(webtext);
// nav bar
let navBarDiv = document.body;
let navHome = document.createElement("ul");
navHome.className = "navHome";
navHome.style.cssText =
  "background-color : green; display : flex;  align-items: center; justify-content:end;padding : 13px;gap : 25px";
let homeLi = document.createElement("li");
homeLi.style.cssText = " list-style-type: none; color: white";
homeLi.textContent = "HOME";
let aboutLi = document.createElement("li");
aboutLi.style.cssText = "list-style-type: none; color: white";
aboutLi.textContent = "ABOUT US";

let contactLi = document.createElement("li");
contactLi.style.cssText = " list-style-type: none; color: white;";
contactLi.textContent = "CONTACT US";
navHome.appendChild(homeLi);
navHome.appendChild(aboutLi);
navHome.appendChild(contactLi);

navBarDiv.appendChild(navHome);
// body
let mainBody = document.body;
let mainDiv = document.createElement("div");
mainDiv.style.cssText =
  "display : flex;  align-items: center; justify-content:center;px;gap :20px; margin : 40px 0";
mainDiv.className = "bodyleft-rigt";
let leftDiv = document.createElement("div");
leftDiv.textContent =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in culpaperferendis fuga sunt adipisci porro non quo modi voluptatibus faciliscommodi dignissimos eos, repudiandae nobis dolorum sint. Magni nisi laboreratione saepe eaque, repellendus adipisci nostrum asperiores distinctioDignissimos rerum voluptatum ex laudantium quiFacilis inventore soluta";
leftDiv.style.cssText = "background-color : green; padding : 100px 8px";
mainDiv.appendChild(leftDiv);
let rightDiv = document.createElement("div");
rightDiv.textContent =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit in culpaperferendis fuga sunt adipisci porro non quo modi voluptatibus faciliscommodi dignissimos eos, repudiandae nobis dolorum sint. Magni nisi laboreratione saepe eaque, repellendus adipisci nostrum asperiores distinctioDignissimos rerum voluptatum ex laudantium quiFacilis inventore soluta";
rightDiv.style.cssText = "background-color : orange;padding : 100px 8px ";
mainDiv.appendChild(rightDiv);

mainBody.appendChild(mainDiv);

// // query selector select element like css
// var selectElement = document.querySelector("p.intro");
// // here if two same class in div querySelector Apply only first Element
// selectElement.innerHTML = 'if two or more classes are same query selector select first element';
// console.log(selectElement);

// // if you select all same class element use query selector
// // use query selectorAll
// var selectAllElement = document.querySelectorAll("h1.intro");
// // here if two same class in div querySelector Apply only first Element
// // selectElement.innerHTML = 'Select All same classes element using query selectorAll Also use loop';
// console.log(selectAllElement);
// for(var i = 0; i < selectAllElement.length; i ++){

//     console.log(selectAllElement[i].innerHTML = 'Select All same classes element using query selectorAll Also use loop');
// }
