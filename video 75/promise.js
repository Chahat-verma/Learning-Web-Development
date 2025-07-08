console.log('This is a promise file');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    console.log(a);
    if (a < 0.5) {
        reject("Sorry the number is not supporting you")
    } else {
        setTimeout(() => {
            console.log("yes its done by prom1 ");
            resolve("Rocky")
        }, 1000)
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    console.log(a);
    if (a < 0.5) {
        reject("Sorry the number is not supporting you 2")
    } else {
        setTimeout(() => {
            console.log("yes its done by prom2");
            resolve("Rocky verma")
        }, 2000)
    }
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err)
// })
// let p3 = Promise.all([prom1, prom2])
// let p3 = Promise.allSettled([prom1, prom2])
let p3 = Promise.race([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch ((err) => {
    console.log(err);
})