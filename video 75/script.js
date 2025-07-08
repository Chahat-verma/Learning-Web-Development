// This example show the asynchronus feature of Javascript
// console.log("I am a hacker")
// console.log("Ram is a hacker")

// setTimeout(() => {
//     console.log("This is a timeout function")
// }, 0);

// setTimeout(() => {
//     console.log("This is a timeout function 2")
// }, 0);
// console.log("This is the end of example")

const fn = () => {
    console.log("hrrrrr");
};
const callback = (arg, fn) => {
    console.log(arg);
    fn();
};

const load_data = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Remo", fn);
    document.head.append(sc);
};
load_data(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
    callback
);
