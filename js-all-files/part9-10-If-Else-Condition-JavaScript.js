// if else
// let age = 18;


// if(age >=18) // if condition is true
// {
//     // this block of code is excute 
//     console.log("you can vote");
// }

// if(age >=16) // here condition is false
// {
//     // this block of code is excute 
//     console.log("you cannot vote");

// }

// here you understand better

let age = 18;

if (age >16) {
    console.log('you can vote');
    // this condition is true bcz age is grater thn 16
}else{
    console.log('you cannot vote ');
}

if (age >20) {
    console.log('you can vote');
    
}else{
    console.log('you cannot vote ');
    // this condition is true bcz age is less thn 20
}


let agee = 18; // first condition
let hasVoterCard = 'no'; // sec condition

if (age >= 15 && hasVoterCard == 'yes')
// if both condition are true than condition is true
// here first condition true but sec is false
{
    console.log('you can vote bcz you have a id card');
    // so next step
    
} else if( age >= 15 && hasVoterCard == 'no')
// here first condition is true and sec conidition also true

{
 console.log('first make your id than you can vote');
 // so this statement will excuted
}

else{
    console.log('you cannot vote ');
}

// nested if else

let age1 = 18;
idCard = 'Yes';

if (age1 <= 20) {
// first check this 
    if (idCard == 'Yes') {
        // than check this
        console.log('oversee Pakistani can vote');
        // both conditions are true this will excute
    } else{
        console.log('first make idCard from pak Govrt');

    }
    
}

//ternary operator
let isLoggedin = 0; // if 0 loggedout if 1 login

// if (isLoggedin == 0) {
//     console.log('Log in');

    
// } else{
//     console.log('Logout');
// }

let option = isLoggedin == 1 ? 'logout' : 'login';
// condition true or false output store in variable option
console.log(option);

let user; 

// user = "waheed hussain";
//- ?? is to avoid undefined
console.log(user ?? 'guest user');

// switch statement start


let isNumberGreater = 40;
let lesserThan = 50;

if (isNumberGreater > 30 && lesserThan < 30) 
{
    // one condition is true and sec false
    console.log('yes number is greater');

    
} else{
    console.log('number is less');
}

let isNumberGreater1 = 40;
let lesserThan1 = 50;

if (isNumberGreater1 > 20) {
    console.log('number is big');
    
    // nested if else
    if (lesserThan1 ==50) {
        console.log('both condition is true ');
        
    }
    
} else{
    console.log('both conditions are false ');
}

let marks = 80;
let grade = "A";
let marks2 = 70;
let grade2 = 'B';

if (marks == 80 ) {
    console.log('Congrts you got ',grade);
    if (marks2 == 70) {
        console.log('congrts you got a ',grade2);
        
    }
} else{
    console.log('better luck next time you are fail');
}


let areyuthere;
// areyuthere = 'yes';

// if user not there than value is undefined
// unfeined avoide use ??
console.log(areyuthere ?? 'guest here user is not there');

let laptopModel = 'hp';
let price = 40;
let gen = '10th gen';

// if (laptopModel == 'hp' && price ==40 && gen == '10th gen') 

// {
//   console.log('this laptop is best');  

// }
