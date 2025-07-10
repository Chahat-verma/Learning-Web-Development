console.log('hello everyone');

let a = parseInt(prompt("enter number 1"))

let b = parseInt(prompt("enter number 2"))
if(isNaN(a) || isNaN(b)){
    throw Error("Sorry try to input a valid number")
}

let sum = a + b 

function main(){
    let x = 2
    try {
        console.log("The sum of the numbers is ", sum*x)
        return true
    } catch (error) {
        console.log("An error found")
        return false
    } finally{
        console.log("files are being colsed and db connection is being closed");// if we pass return in try and catch,this will run only when it is in the finally
    }
}

let c = main()