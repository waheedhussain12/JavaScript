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


// let counter1  = 1;
// let sum = 0;
// while (counter1 <=10) {
//     if (counter1 % 2 ==0) {
//         sum = sum + counter1
//     }
//     counter1++;
//     document.write(sum);
// }

// do while
// let counter2 = 12;
// // do does not care if its first condition is false
// do {
//     document.write('waheed');
//     counter2 ++;
    
// } while (counter2 <=10);

// let counter3 = 12;
// do {
//     document.write("print  me");
//     counter3 ++;
    
// } while (counter3 <= 10)



// for loop

// for( let counter4 = 1; counter4 <=10; counter4 ++){
    
//     document.write('print using for loop in js');
// }

// let  numberA = 1;           

// while (numberA <=20) {
//     console.log("print 1 to 20",numberA);
//     numberA++;
    
// }

// let numberB = 1;

// let priintName = "add this";

// while (numberB <= 10) {

//     if( numberB ==6){
//         console.log(priintName);
//         // break;
//      // if we use break program out of the loop
//     }
  
//   console.log(numberB);
//   numberB++;  
// }

// let numberC = 1;
// let price = 1;
// while (numberC<= 9 && price <=9) {

// if (numberC==2 && price ==2 ) {
//     console.log('new price is 20Rs');
// }
// if (numberC==3 && price ==3 ) {
//     console.log('now Price is double 40Rs');
// }
// if (numberC==4 && price ==4 ) {
//     console.log('pens out of stock ');
// }
// if (numberC==5 && price ==5 ) {
//     console.log('new Price Comming Soon');
// }
// if (numberC==8 && price ==8 ) {
//     console.log('new price is 80Rs');
// }


//     console.log('price is 100RS',numberC);
    
//     console.log(price);
//     price ++;
//     numberC++;
    
// }


// do while  loops
// let numberD = 1;

// do {
//     console.log('anyhow run first condition bcz its do while loop',numberD);
// numberD++;
    
// } while (numberD<5);

// for  loop

// for (let numberE = 1; numberE <=8; numberE++) {

//     if (numberE == 3) {
//         console.log('this is number is 3');
        
//     }

//     if (numberE == 5) {
//         console.log('this is number 5');
        
//     }
//     console.log('using for loop',numberE);
    
    
// }

// let numberF = 1;
//  let numChange = 2;
// while (numberF < 10) {
//     if (numberF==2 && numChange ==2) {
//         console.log('tv on');
        
//     }
//     if (numberF==4 && numChange ==2) {
//         console.log('tv off');
        
//     }

//     console.log(numberF,'work fine');
//     numberF++;
    
// }

// let numberG = 1;
// let numberEven = 2;
// while (numberG <=10) {
// // nested  loop
//     while (numberEven <=10) {

//     if (numberEven == 4) {
//         console.log(numberEven,'yes it is 4th even number');
        
//     }
//         numberEven = numberEven +2;
//         console.log(numberEven,'Number is even');
//     }

//     console.log(numberG,'1 to 10');
//     numberG++;
    
// }


// break and continue

let a = 1;
while (a<=10) {

if (a==4) {
    console.log('break program from 4th number');
    break;
    // if you use break program will exit from block {}
}

    console.log(a, 'numbers');
a++;    
}

let b = 1;
for( b; b<=10;b++){

    // statement 5th will not excute 

    if (b ==5) {
        console.log('5th statement will not show');
        continue;
        
    }
    console.log('numbers',b);
}