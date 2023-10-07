var tagName = document.getElementsByTagName('h1');
// here all tags names are same thats why changes all h1 tags
console.log(tagName);
getLen = tagName.length;

for(var i = 0; i < getLen; i++){
    var result = tagName[i].innerHTML = "Get access all same TagNames";

}
console.log(result);

/*
mainDiv ==>> access inside main div
use main div as a document
store in new variable 
*/
var mainDiv = document.getElementById('mainDiv');
console.log(mainDiv);
var insideMainDiv = mainDiv.getElementsByTagName('h2');
console.log(insideMainDiv);
for (var i = 0; i < insideMainDiv.length; i++){

    console.log(insideMainDiv[i].innerHTML = "Inside Main Div");
}
