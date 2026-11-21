const inputText = document.getElementById("inptText")
const Btn = document.getElementById("button")
let result = document.getElementById("result")

Btn.addEventListener ("click", function() {
    let textoInput = inputText.value

    if (textoInput === "Brasil" || textoInput === "Brazil" || textoInput === "brasil" || textoInput === "brazil") {
        result.textContent = `yeah, you are from ${textoInput} too`
    }else {
        result.textContent = `you are from ${textoInput}, Yeah its cool`
    }
})