let inputtext = document.getElementById("inputtext")
let btn = document.getElementById("Btn")
let thanksmsg = document.getElementById("thanksMessage")

btn.addEventListener("click", function() {
    let text = inputtext.value

    if (text.trim() !== "" && !isNaN(text)) {
    text = Number(text);
}

    if(typeof text === "string"){
        thanksmsg.textContent = `Thanks, you must be ${text}`
    } else {
        thanksmsg.textContent = `${text} Sing it corectly damn it`
    }
})