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