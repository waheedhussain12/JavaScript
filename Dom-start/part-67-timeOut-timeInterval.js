// time out and time interval
// time out means delay particular time

// let timeOut = setTimeout(myfun,3000);
// timeout return a id yu can store in variable as well 
// you can make condition as well
// function myfun(){
//     console.log("Print every three seconds of delay");
//     let body = window.document.body;
//     body.style.background = "orange"

// }
// you can clear as well
// clearTimeout(timeOut);

// timeInterval
let timeinterval = setInterval(myfun2,6000);
function myfun2(){
    console.log("Print every two sec of time");
    let body = window.document.body;
    body.style.background = "orange";
   
   
}
let btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
clearInterval(timeinterval);
});