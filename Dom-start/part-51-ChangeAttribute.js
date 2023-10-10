let main = document.querySelector(".main");
// set Attrributes
// key and value
main.setAttribute('newClass','value');
// how to know set attribute value
// use get Attribute
let key = main.getAttribute("id");
console.log(key);
// how to remove Attribute
// use remove Attribute
main.removeAttribute("id");
// id attribute and its value is remove
// how to know it is attribute or not
// know using has attribute
let  val = main.hasAttribute("newClass");
console.log(val);// true means newClass  attributes is avaliable