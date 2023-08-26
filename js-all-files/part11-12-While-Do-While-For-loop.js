// loops in js
// while loop

// let counter = 1;

// while (counter <=  10)
// // check condition 1 is less if 1 is equal to 10 than condition is stop
// {
//     document.write('waheed hussain');
//     counter ++; // increment ++

// }

// let number = 1;

// while (number <= 10) {

//     document.write(number)
//     number =  number +2 ;
//     // increment plus 2
// }


let counter1  = 1;
let sum = 0;
while (counter1 <=10) {
    if (counter1 % 2 ==0) {
        sum = sum + counter1
    }
    counter1++;
    document.write(sum);
}

let counter2 = 12;
// do does not care if its first condition is false
do {
    document.write('waheed');
    counter2 ++;
    
} while (counter2 <=10);

let counter3 = 12;
do {
    document.write("print  me");
    counter3 ++;
    
} while (counter3 <= 10)

for( let counter4 = 1; counter4 <=10; counter4 ++){
    
    document.write('print using for loop in js');
}