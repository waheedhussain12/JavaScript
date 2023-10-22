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