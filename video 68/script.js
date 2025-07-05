console.log("jhandu")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)
// boxes[2].style.backgroundColor = "seagreen"

// document.getElementById("greenbox").style.backgroundColor = "seagreen"

// document.querySelector(".box").style.backgroundColor = "green"

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e =>{
    //     e.style.backgroundColor = "green"
// })

document.getElementsByTagName("div")

document.getElementsByTagName("div")[2].matches("box")
document.getElementsByTagName("div")[3].matches("greenbox")
document.getElementsByTagName("div")[5].matches("greenbox")
document.getElementsByTagName("div")[5].closest("greenbox")

document.querySelectorAll(".container").contains(document.getElementsByTagName("div")[2])
document.querySelectorAll(".container").contains(document.getElementsByTagName("div")[0])
document.querySelectorAll(".container").contains(document.getElementsByTagName("div")[6])