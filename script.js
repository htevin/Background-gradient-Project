let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.querySelector("#gradient")
let h33 = document.querySelector("h3")
let backh1 = document.querySelector(".backh1")
let backh2 = document.querySelector(".back2")

function gradientEle(){
    body.style.background = (`linear-gradient(to right, ${color1.value} , ${color2.value})`)
    h33.textContent = body.style.background

    backh1.style.color = color2.value
    backh2.style.color = color1.value
}

color1.addEventListener("input", gradientEle)

color2.addEventListener("input", gradientEle)