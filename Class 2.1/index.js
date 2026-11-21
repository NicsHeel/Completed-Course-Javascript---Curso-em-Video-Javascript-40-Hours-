let MyBtn = document.getElementById("button")

MyBtn.addEventListener("click", clikou)
MyBtn.addEventListener("mouseenter", entrou)
MyBtn.addEventListener("mouseleave", saiu)

function entrou () {
    MyBtn.style.background = 'yellow'
}

function saiu () {
    MyBtn.style.background = 'lightgreen'
}

function clikou () {
    MyBtn.style.background = 'red'
}
