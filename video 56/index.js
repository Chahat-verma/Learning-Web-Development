console.log("Hello this is tutuorial on js conditionals");

let age = 7;
// let grace = 3;

// age += grace;
// console.log(age + grace);

// console.log(age + grace);
// console.log(age - grace);
// console.log(age / grace);
// console.log(age * grace);
// console.log(age ** grace);
// console.log(age % grace);

// if (age + grace > 18) {
//   console.log("You can drive");
// } else {
//   console.log("You can not drive");
// }

//comparison operator
// ==  - equal ro
// !=  - not equal to
// ===  - equal value and type
// !==  - not equal value or not equal type
// >  - greater than
// <  - less than
// >=  - greater than or equal to
// <=  - less than or equal to
// ?  - ternary operator

// logical operator
// &&  - logical and - both statement must be true
// ||  - logical or - one of the sttaement should be true
// !  - logical not - if statement is true than output is false

// if (age != 18) {
//     console.log("You can drive");
// } else if (age == 0) {
//     console.log("are you kidding");
// } else {
//     console.log("You can not drive");
// }

let a = 56;
let b = 43;
let c = a > b ? (a - b) : (b - a);
/*
translate to
if(a>b){
    let c = a-b;
} else{
    let c = b-a;
}
*/
console.log(c);
