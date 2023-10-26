// Locations methods and properties

let href = location.href;
console.log(href);
let pathName = window.location.pathname;
console.log(pathName);
let protoCol = location.protocol;
console.log(protoCol);
let Port = location.port;
console.log(Port);

// also redirect
let button = document.getElementById("btn");
button.addEventListener("click", function(){

// there are three types of redirect
// 1 location
// window.location = "https://www.google.com";
// 2 loaction href
// window.location.href = "https://www.yahoo.com";
// 3 assign() method
window.location.assign("https://www.yahoo.com");
// these methods and properties provides us back button
// these all works same but assign is a methods and other two are properties
// 4 replace
// does not has back button means dose not store history
// location.replace("https://www.yahoo.com");
// 5 reload
// you can also reload the page using location reload method
location.reload();




})



// Navigatar object
// navigatar give us imformation about browser
console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.appVersion);
console.log(navigator.cookieEnabled);
console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(navigator.userAgent);
console.log(navigator.javaEnabled);




//Screen Object 
// imformation about screens 
// which device opne in our website
console.log(screen.width);
console.log(screen.colorDepth);
console.log(screen.height);
console.log(screen.pixelDepth);
console.log(screen.orientation);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);
console.log(screen.availHeight);