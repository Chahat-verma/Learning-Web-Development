// let obj = {
//     a : 1,
//     b : "Rocky"
// }

// console.log(obj);

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

// rabbit.__proto__ =  animal;

class Animal {
    constructor(name) {
        this.name = name
        console.log("The Object is created");
    }

    eats() {
        console.log("I am eating");
    }

    jumps() {
        console.log("I can jump");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("The Object is created and the object is lion...");
    }

    eats() {
        console.log("I am eating and roaring");
    }
}

let a = new Animal("bunny")
console.log(a)

let l = new Lion("sher")
console.log(l)
