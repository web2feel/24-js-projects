let message = document.querySelector("#message")
let counter = document.querySelector(".counter")
let limit = Number(message.getAttribute("maxlength"))

message.addEventListener("input", (e) => {
    message.style.outlineColor = null
    let textlength = e.target.value.length
    let liveCount = limit - textlength
    counter.textContent = liveCount
    if(liveCount <= 10 ){
        message.style.outlineColor = "red"
    }
})