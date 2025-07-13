async function sleep(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
// let a = await sleep() both show error
// let b = await sleep()
(async function main() {  // this IIFE
    
    console.log(a2) // hosting is done by var only . let and const shows the error. In hosting variable is initialize later and called first but it shows undefined value
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)


    // let x, y = [1, 4] //show error

    // Destructuring 
    // let [x, y] = [1, 4] 
    // console.log(x, y)

    // destructuring in array using Destructuring operator
    // let [x, y, ...rest] = [1, 4, 5, 7, 9, 2, 3] // ... is the destructuring operator
    // console.log(x, y, rest)

    // destructuring in object
    // let obj ={
    //     a : 1,
    //     b : 4,
    //     c : 7
    // }

    // let {a, c} = obj
    // console.log(a, c)

    //  spread operator
    function sum(a, b, c) {
        return a + b + c
    }

    // let arr = [1, 4, 7]
    // console.log(arr[0] + arr[1] + arr[2]  )
    // console.log(sum(arr[0], arr[1], arr[2]) )
    // console.log(sum(...arr) )

    // array as object
    let a = [1, 4, 7, 3, 8]
    let obj = { ...a }
    console.log(obj)

    var a2 = 4;   // hosting a2 
})()
