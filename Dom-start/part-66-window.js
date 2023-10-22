 // how to find the size of the window
 // there are two types of height and width
 // inner and outer
 // inner width and height is only disply area
 // outer width and height is full browser area
 // inner width and height
  let innerHeightCheck = window.innerHeight;
  let innerWidthCheck = window.innerWidth;
 console.log(`this is inner Height ${innerHeightCheck} and this is inner Width ${innerWidthCheck}`);

 // outer width and height means full area of Browser

 let outerHeightCheck = window.outerHeight;
 let outerWidthCheck = window.outerWidth;
console.log(`this is outer Height ${outerHeightCheck} and this is outer Width ${outerWidthCheck}`);

// how to open new Window or pop window

let googleButton = window.document.querySelector("#googlebtn");
let googleButton2 = window.document.querySelector("#googlebtn");
let closebtn = window.document.querySelector("#closebtn");
let win;
googleButton.addEventListener("click",function(){
    // tabs are open
    // three parameters inSide the open method
    // 1 url 2 name 3 features
    let url = "https://www.google.com"; // set which site or link to open
    let url2 = "https://www.yahoo.com"
    let target = "yahoo"; // name set  
    let features = "height = 400, width = 400"; // add features like 
    // height width left screen x or right screen y
// if you want to open new tab use featurs
// window.open(url , target , features)
   win = window.open(url2,target);
});

googleButton2.addEventListener("click",function(){
window.open("https://www.yahoo.com/news/never-vote-biden-muslim-americans-191319506.html","yahoo");

})
// store a variable which tab you are closing
// make global variable
closebtn.addEventListener("click",function(){
  win.close();
    })

