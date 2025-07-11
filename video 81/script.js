// // method 1
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    // const additem = async (item) => {
    //     await randomDelay();
    //     let div = document.createElement("div");
    //     div.innerHTML = item;
    //     document.body.append(div);
    // };

    // const randomDelay = () => {
    //     return new Promise((resolve, reject) => {
    //         timeout = 1 + 6 * Math.random();
    //         setTimeout(() => {
    //             resolve();
    //         }, timeout * 1000);
    //     });
    // };

    // async function main() {
    //     let t = setInterval(() => {
    //         let last = document.body.lastElementChild;

    //         // use this if page has some content in the div
    //         // let last = document.body.getElementsByTagName("div");
    //         // last = last[last.length - 1]
    //         if (last.innerHTML.endsWith("...")) {
    //             last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
    //         } else {
    //             last.innerHTML = last.innerHTML + "."
    //         }
    //     }, 300)

    //     let text = [
    //         "Initialized Hacking fetching data from your device",
    //         "Reading your files",
    //         "Password files Detected",
    //         "Sending all passwords and personal files to server",
    //         "cleaning up",
    //     ];

    //     for (const item of text) {
    //         await additem(item);
    //     }
    //     await randomDelay()
    //     clearInterval(t)
    // }
    // main();
    // method 2
    const blinkdot = (text, para, resolve, delay) => {
        setTimeout(() => {
            para.innerText = ">>> " + text;
            setTimeout(() => {
                para.innerText;
                resolve("Done");
            }, 200);
        }, 200);
    };

    const msg = (text) => {
        return new Promise((resolve) => {
            let delay = (Math.floor(Math.random() * 5) + 1) * 1000
            setTimeout(() => {
                let para = document.createElement("p")
                para.innerText = ">>> " + text
                document.body.append(para);
                blinkdot(text, para, resolve, delay)
            }, delay)
        })
    }

    const terminal = async () => {
        let t = setInterval(() => {
            let last = document.body.lastElementChild;

            //         // use this if page has some content in the div
            //         // let last = document.body.getElementsByTagName("div");
            //         // last = last[last.length - 1]
            if (last.innerText.endsWith("...")) {
                last.innerText = last.innerText.slice(0, last.innerText.length - 3)
            } else {
                last.innerText = last.innerText + "."
            }
        }, 300)

        await msg("Initialized Hacking fetching data from your device")
        await msg("Reading your files")
        await msg("Password files Detected")
        await msg("Sending all passwords and personal files to server")
        await msg("Cleaning up")

        clearInterval(t)
    }
    terminal()
});