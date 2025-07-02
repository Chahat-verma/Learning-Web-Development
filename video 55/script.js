console.log("Hello guys this is day 55 of learning");
// var a = 55;
// var b = 34;
// var t = "chahat";
// var _f = 56;
// var 4g = 56; not allowed
// console.log(a + b);
// console.log(typeof a, typeof b, typeof t);

// const r3 =58
// r3 =r3 + 9 not allowed
// var a = 90;
// {
//     var a = 545
//     console.log(a) output = 545
// }
// console.log(a) output = 545
// because var has global scope

let a = 55;
a = a + 9;
let b = 34;
{
    let a = 545;
  console.log(a); // output = 545
}
console.log(a); // output = 64
// because let has block scope

let x = 18;
let y = "ramu";
let w = 35.78;
const h = true;
let v = undefined;
let j = null;

console.log(x, y, w, h, v, j);
console.log(typeof x, typeof y, typeof w, typeof h, typeof v, typeof j);


let p = {
    "name" : "Dada",
    "job profile" : "Developer",
    "job code" : 432,
}
console.log(p)
p.Salary = "80lakhs"
console.log(p)
p.Salary = "1crore"
console.log(p)