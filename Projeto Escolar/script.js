const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

document.getElementById("particles").appendChild(canvas)

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for (let i = 0; i < 80; i++) {

    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
    })

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(p => {

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = "#a855f7"
        ctx.fill()

        p.y += p.speed

        if (p.y > canvas.height) {
            p.y = 0
        }

    })

    requestAnimationFrame(animate)

}

animate()
function calcular() {

    let port = Number(document.getElementById("port").value)
    let mat = Number(document.getElementById("mat").value)
    let cien = Number(document.getElementById("cien").value)
    let hist = Number(document.getElementById("hist").value)
    let geo = Number(document.getElementById("geo").value)
    let educ = Number(document.getElementById("educ").value)

    let inputs = document.querySelectorAll("input")

    let vazio = false

    inputs.forEach(input => {
        if (input.value === "") {
            input.style.border = "2px solid red"
            vazio = true
        }
        else {
            input.style.border = "none"
        }
    })

    if (vazio) {
        document.getElementById(erro).innerText = "Preencha"
        return
    }

    let media = (port + mat + cien + hist + geo + educ) / 6

    let curso = ""

    if (media >= 7) {
        curso = "x"
    }
    else if (media >= 6) {
        curso = "y"
    }
    else {
        curso = "Curso não definido. Estude mais um pouco."
    }

    localStorage.setItem("media", media.toFixed(1))
    localStorage.setItem("curso", curso)

    window.location.href = "resultado.html"
}

function mostrarCursos(){
    let cursos = document.getElementById("cursos")
    if(cursos.style.display === "grid"){
        cursos.style.display = "none"
    }
    else{
        cursos.style.display = "grid"
    }
}
