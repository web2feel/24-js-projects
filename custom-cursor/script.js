(function(){
    const cursor = document.querySelector(".cursor")
    const links = document.querySelectorAll("a")

    document.addEventListener("mousemove", function(event){
        let xPos = event.clientX
        let yPos = event.clientY
        cursor.style.transform = `translate3d(calc(${xPos}px - 50%),calc(${yPos}px - 50%),0)`
    })

    links.forEach(function(link){
        link.addEventListener("mouseover",function(){
            cursor.classList.add("hovered")
        })
        link.addEventListener("mouseleave",function(){
            cursor.classList.remove("hovered")
        })
    })
})()