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