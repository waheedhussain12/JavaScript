// object in js
// object syntax
// var name = {} object
// var person = {}; // empty object
// console.log(person);
// person is object
var person = {
  firstName: "waheed", // these are propertyies
  lastName: "hussain",
};

// two ways in access an object

// first way access from . notation
console.log(person.firstName, person.lastName);

// sec way to access object form like Array[] notation
console.log(person["firstName"]); // access like Array
console.log(person["lastName"]);
// console.log(person); // print all object

var person = {
  // space is allow in properties like first Name
  // note use ""or '' double quote or single than inside property name
  "first Name": "waheed", // note Space are count use camel case or -
  lastName: "hussain",
};
// here .notation is not working
console.log(person["first Name"]); // this is allow
console.log(person.lastName); // this is also allowed

var person = {
  firstName: "waheed",
  lastName: "hussain",
};
// also print full object
console.log(person);
// also add property later
person.age = 33; // here person is object and age is proprty and 33 is property's value
// Also you can change value in property
person.lastName = "Ali";
console.log(person.lastName);
// Also you Can delete property in object
delete person.lastName;
console.log(person); // now lastName is deleted
// What if we are not asign property in object
// output is undefined
console.log(person.age);

// Also You can check in object this property is exist or not
console.log(person.favcolor);
// You will get undefined bcz this property is not exits in object
// Also sec way to check
console.log("favcolor" in person);
// Here property inside the stirng
// In opertor give us value in true or false

// We don't Know How maney properties  are in object
// So We can use for in loop
var person = {
  firstName: "waheed",
  lastName: "hussain",
};
// also print full object
console.log(person);
// also add property later
person.age = 33;

for (let check in person) {
  // console.log(check); // show all property in output
  console.log(check + ": " + person[check]); // also check values of
  // using index[] like Array
}




// object 

var house = { //this is object => house
    // this is properties => all properites
    // 'kit chen': 'for making tea or Dinner',
// this is also valid take property in to stings
    kitchen: 'for making tea or Dinner',
    rooms: 'all rooms for rent',
    bed: 'for sleeping',
    washroom: 'for changing cloths',
    storeRoom: 'for store cloths and other staff',
    chair: 'Chair for sitting',
};
// console.log(house['kit chen']);// here . notation is not work reason is space
// print full object
console.log(house);
// you can access proprties and its value one by one
// two types of access values in object
// one . notation and second index[] like Array

// first way using . notation
console.log(house.bed); // best way 
// also make a variable and store property and its value
var fst = house.bed;
console.log(fst);
// second way using index[] like Array
console.log(house['chair']); 
// note take property in strings "chair",
// Also you can add property and its value in object 
house.lightBoard = 'for truning on light'
// here house is object and lightBoard is property and for truning on light is value
console.log(house.lightBoard); 
// property and its value is added or element

// also you can update or property's value change
house.kitchen = 'for making tea or Dinner also lunch and breakfast'
console.log(house['kitchen']);
// note if use [] must use string inside the []
// also you can delete property and its value
delete house.rooms;
console.log(house.rooms); // check 
// rooms property is deleted thats why output is undefined
// undefined means this property is not in object

// second way to check property is available in object or not
// using in operator

console.log('houseColr' in house);
// in operator give us values in true or false not undefined
// note always take property inside the string 'houseColor'
console.log('kitchen' in house);
// output is true bcz kitchen is available in the object


// We don't Know How maney properties  are in object
// So We can use for in loop
for(var i in house){
    console.log(i + ": "+house[i]);
    // i for properties
    // house[i] for values

}
