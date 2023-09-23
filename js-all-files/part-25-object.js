// object in js
// object syntax
// var name = {} object
// var person = {}; // empty object
// console.log(person);

var person = {
firstName: "waheed",
lastName:"hussain"
}; 


// two ways in access an object 

// first way access from . notation
console.log(person.firstName,person.lastName);

// sec way to access object form like Array[] notation
console.log(person['firstName']); // access like Array 
console.log(person['lastName']);
// console.log(person); // print all object


var person = {
    // space is allow in properties like first Name
    // note use ""or '' double quote or single than inside property name
    'first Name': "waheed", // note Space are count use camel case or - 
    lastName:"hussain"
    }; 
    // here .notation is not working 
    console.log(person['first Name']); // this is allow
    console.log(person.lastName); // this is also allowed


    var person = {
        firstName: "waheed",
        lastName:"hussain"
        }; 
        // also print full object
        console.log(person);
        // also add property later
    person.age = 33;
    // also you can change value in property
    person.lastName = "Ali";
    console.log(person.lastName);
    // also you can delete property in object
    delete person.lastName;
    console.log(person); // now lastName is deleted
        // What if we are not asign property in object
        // output is undefined 
        console.log(person.age);

        // Also You can check in object this property is exist or not
        console.log(person.favcolor);
        // You will get undefined bcz this property is not exits in object
        // Also sec way to check
        console.log('favcolor' in person);
        // Here property inside the stirng 
        // in opertor give us value in true or false

        // We don't know how maney properties  are in object
        // So we can use for in loop
        for(let check in person){


            console.log(check);
        }