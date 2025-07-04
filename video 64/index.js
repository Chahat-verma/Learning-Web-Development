console.log("Solution of Exercise 10");
// Can use one of them
// Method 1 using Function
// let adj ="Crazy Amazing Fire "
// let shop = "Engine Foods Garments "
// let word = "Bros Limited Hub"

// /* Simpler version without arrays */
// function pickRandom(str) {
//     let words = str.trim().split(' ');
//     return words[Math.floor(Math.random() * words.length)];
// }

// function Name() {
//     let adjWord = pickRandom(adj);
//     let shopWord = pickRandom(shop);
//     let anotherWord = pickRandom(word);
//     console.log(`Your Brand new business name is ${adjWord} ${shopWord} ${anotherWord}`);
// }
// Name();

// Method 2 using Conditional statement
let x, y, z;
let a = Math.random();

if (a < 0.33) {
    x = "Crazy";
} else if (a >= 0.33 && a < 0.66) {
    x = "Amazing";
} else {
  x = "Fire";
}

a = Math.random();
if (a < 0.33) {
  x = "Crazy";
} else if (a >= 0.33 && a < 0.66) {
    x = "Amazing";
} else {
    x = "Fire";
}
a = Math.random();
if (a < 0.33) {
    y = "Engine";
} else if (a >= 0.33 && a < 0.66) {
    y = "Foods";
} else {
    y = "Garments";
}
a = Math.random();
if (a < 0.33) {
    z = "Bros";
} else if (a >= 0.33 && a < 0.66) {
    z = "Limited";
} else {
  z = "Hub";
}
console.log(`Your Brand new business name is ${x}-${y}-${z}`);