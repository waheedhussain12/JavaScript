// these three functons are used for interact with the users

// alert('this page is not found');
// show a message.


// let age = prompt(`Enter Your age ` ,22);
// // for storing user entering data make variable and puts on it
// // document.write(age); 
// // display on scrren
// if (age != null) {
//     document.write(`Your Age is ${age}`);
     
    
// }else{
//     document.write(`Age Field was Blank`);
// }


// confrim function

let response = confirm(`Are You Sure, You want to Delete`);
// check response true or false
if (response) {
    document.write(`Deleted`);
    
    
}else{
    document.write(`Not Deleted`);
}
