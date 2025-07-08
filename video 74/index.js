let btn = document.getElementById("btn")

//list of all mouse event
//https://developer.mozilla.org/en-Us/docs/Web/API/Element#mouse_events
btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b> hey you are clicked</b>"
})
btn.addEventListener("contextmenu", ()=>{
    alert("Right click please")
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})