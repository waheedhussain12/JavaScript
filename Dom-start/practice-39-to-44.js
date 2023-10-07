//id selector
let getID = document.getElementById("h2");
console.log(getID); 
// access element and store in variable
// here all data store in variable getID
// now modify element 
getID.innerHTML = "Waheed hussain";
// change value using innerHTML
console.log(getID);


// className selector
// access element only one class
let oneClass = document.getElementsByClassName("intro");
console.log(oneClass); // HTML collection 
// so if you change in html use loop 
// console.log(oneClass.innerHTML = "class apply only one itme");
for(let i = 0; i < oneClass.length; i++ ){
result = oneClass[i].innerHTML = "class apply only one itme"
console.log(result);
}

// select MultiClass with same classNames
let multiClass = document.getElementsByClassName("same");
// same className all element store in multiClass variable
// if you changes in elements value use loop bcz its html collection
console.log(multiClass);
for(let i = 0; i < multiClass.length; i++){
    result2 = multiClass[i].innerHTML = "all same classes elements are changed"
console.log(result2);
}


// different classes apply in one or two element

var oneOrTwoClass = document.getElementsByClassName("one two");
console.log(oneOrTwoClass);

// select an element using tagName
// select any element use tagName
// all p selected in html document

let tName = document.getElementsByTagName("p");
// console.log(tName.innerHTML);
for(let i = 0; i < tName.length; i++){

    result3 = tName[i].innerHTML;
    console.log(result3);
}

// what if iam selecting all p tags in div
let div1 = document.getElementById("mainDiv");
let mainDivsPtag = div1.getElementsByTagName("p");
console.log(mainDivsPtag);
// in main div's all p are selected
let mainDivsh2tag = div1.getElementsByTagName("h2");
console.log(mainDivsh2tag);
// here inside the main div' all  h2 is selected


// query selector
// query selector like a css selector
let h1 = document.querySelector(".sameh1");
console.log(h1);
// if same name tag query selector select first element
// note if two or more element with same class 
// query selector select only one means select first

let mainDiv2 = document.querySelector("#mainDiv2");
console.log(mainDiv2);
// access main div
let mainDiv2Allp = mainDiv2.querySelectorAll(".sam");
// access main div's all same class or same tag
for(let i = 0; i <mainDiv2Allp.length; i++){
    // here first fetch data than change data using innerHTML
    result4 = mainDiv2Allp[i].innerHTML = 'selected all p element using queryAll';
}
console.log(result4);
 let allul = document.querySelector("#ul");
 // first access ul
 console.log(allul);
let allLi = allul.querySelectorAll("li");
// sec access all ul's inside li
console.log(allLi);
let allLiist = allul.querySelectorAll(".list");
// third access all li with class list
console.log(allLiist);

//Traversing Elements 
