// calculate factorial using for loop

// let num = prompt("Enter a number");
// for (let i = num; i > 1; i--) {
//     num = num * (i-1);
// }
// console.log(num);

// calculate factorial using reduce function of array

// let arr = [1,2,3,4,5,6,7,8]
// const red = (a, b)=>{
//     return a*b
// }
// console.log(arr.reduce(red))


// calculate factorial using reduce function of array by giving user input
let a = parseInt(prompt("enter a number"))
        // let a = 8
        function fact(number) {
            let arr = Array.from(Array(number+1).keys())
            console.log(arr.slice(1,))
            let c = arr.slice(1,).reduce((a, b) => {
                return a * b
            })
            console.log(c)
        }
        fact(a)