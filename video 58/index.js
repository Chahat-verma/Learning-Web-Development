// console.log("Hello this is tutuorial on function in js");

// console.log("Hey chahat you are a nice person");
// console.log("Hey chahat you are a good person");
// console.log("Hey chahat you are good learner");
// console.log("Hey chahat you are a good web devloper");

function nice(name){
console.log("Hey, " + name + " you are a nice person");
console.log("Hey, " + name + " you are a good person");
console.log("Hey, " + name + " you are good learner");
console.log("Hey, " + name + " you are a good web devloper");
}
// nice("Chahat")
// nice("Raju")
// nice("Vishal")

function sum(a, b, c = 4){//here c is the default parameter
    // console.log(a+b)
    return a + b + c
}

// sum(6,9)
result = sum(6,9)
result1 = sum(16,9)
result2 = sum(6,49)
result3 = sum(62,9)
console.log("The sum of these numbers is ", result)
console.log("The sum of these numbers is ", result1)
console.log("The sum of these numbers is ", result2)
console.log("The sum of these numbers is ", result3)


const as = (a)=>{
    console.log ("This is an arrow function", a)
}

as(23)
as(45)
as(87)
as(90)
