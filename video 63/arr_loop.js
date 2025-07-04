let hrr = [59, 39, 28, 23, 14, 64];

// For Loop
// for (let i = 0; i < hrr.length; i++) {
//     const e = hrr[i];
//     console.log(e);
// }

// ForEach Loop
// hrr.forEach((value, index, arr) => {
//     console.log(value, index, arr)
// });

// obj ={
//     a : 2,
//     b : 4,
//     c : 6
// }
// // For in Loop
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const e = obj[key];
//         console.log(e)
//     }
// }

// For of loop
// for (const e of hrr) {
//     console.log(e)
// }

// if we want to create new array from existing array
// way 1
// let newhrr = []
// for (let i = 0; i < hrr.length; i++) {
//     const d = hrr[i];
//     newhrr.push(d+10)
// }
// console.log(newhrr)


// way 2 using Map()
let newhrr = hrr.map((e) => {
  return e *2;
});
console.log(newhrr);


// filter functtion
const great = (e) => {
    if (e > 50) {
        return true;
    }
    return false;
};
newhrr.filter(great);
console.log(newhrr.filter(great));


// reduce function
const red = (a, b)=>{
    return a+b
}
console.log(hrr.reduce(red))

// Array from function
console .log(Array.from("Vishal"))