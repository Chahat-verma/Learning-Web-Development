console.log("this is the tutorial of async and await");

// async function getData() {
//     // simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(558)
//         }, 3500)
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
    // simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    // let data = await x.json()
    // console.log(data)
    // return data
    let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    let data = await x.json();
    return data;
}

async function main() {
    console.log("Loading modules");

    console.log("Do something else");

    console.log("Load Data");

    let data = await getData();

    console.log(data);

    console.log("process data");

    console.log("Task 2");
}

main();

// data.then((v) => {
//     console.log(data);

//     console.log('process data');

//     console.log('Task 2');
// })




// Example of post method implementation
// async function postData(url = "", data = {}) {
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             // "Content-Type": "application/x-wwww-form-urlencoded",
//         },
//         body: JSON.stringify(data),
//     });
//     return response.json();
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data);
// });
