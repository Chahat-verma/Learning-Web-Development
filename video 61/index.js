console.log("Hello this is Solution of Exercise 9")

let a= parseInt(prompt("Enter number 1"));
let b= parseInt(prompt("Enter number 2"));
let x = prompt("Enter operation")[0];
let c = Math.random();
// method 1
// e = c * 10;
// if (e%10){
//     switch(x) {
//         case '+':
//             console.log(a-b);
//             break;
//         case '*':
//             console.log(a+b);
//             break;
//         case '-':
//             console.log(a/b);
//             break;
//         case '/':
//             console.log(a**b);
//             break;
//         default:
//             console.log("Enter a valid operation");
//     }
// }
// else{
//     switch(x) {
//         case '+':
//             console.log(a+b);
//             break;
//         case '*':
//             console.log(a*b);
//             break;
//         case '-':
//             console.log(a-b);
//             break;
//         case '/':
//             console.log(a/b);
//             break;
//         default:
//             console.log("Enter a valid operation");
//     }
// }

// method 2
let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(c>0.1){
    //perform correct calculation
    alert(`The result is ${eval(`${a} ${x} ${b}`)}`)
}
else{
    //Perform wrong calculation
    o = obj[o]
    alert(`The result is ${eval(`${a} ${x} ${b}`)}`)
}