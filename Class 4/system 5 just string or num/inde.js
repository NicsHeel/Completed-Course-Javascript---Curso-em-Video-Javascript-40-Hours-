//only strings, erase the numbers:

let inptText = document.getElementById("inptText")
let btnText = document.getElementById("inputText")
let resultText = document.getElementById("resultText")

inptText.addEventListener("input", function () {
    this.value = this.value.replace(/[0-9]/g, "")
})

btnText.addEventListener("click", function () {
    let text = inptText.value
    text = text.trim()
    resultText.textContent = `you wrote: ${text}`
})

//Only Number:

let inptNumb = document.getElementById("inptNum")
let BtnNum = document.getElementById("BtnNum")
let resultNumber = document.getElementById("ResultNum")

BtnNum.addEventListener("click", function () {

    let NumWrote = inptNumb.value

    if (NumWrote.trim() !== "" && /^[0-9]+$/.test(NumWrote)) {
    resultNumber.textContent = "Valid number!";
    }
    else if (NumWrote.trim() === "") {
        resultNumber.textContent = "write some thing, i have stuffs to do"
    }
    else {
    resultNumber.textContent = "Only numbers are allowed!";
    }
    
})

//Test just for  string

const username = document.getElementById("username");
const btnAllowed = document.getElementById("btnAllowed")
const result = document.getElementById("result");

btnAllowed.addEventListener("click", function() {

    textTest = username.value

    if (textTest.trim() === "") {
    result.textContent = "Please enter something!";
    }
    else if (/[0-9]/.test(textTest)) {
    result.textContent = "Numbers are not allowed!";
    }
    else {
    result.textContent = "Valid text!";
    }

})

// Another just for String:

const inputString = document.getElementById("inputforString")
const btnString = document.getElementById("BtnForString")
const resultString = document.getElementById("ResultString")

btnString.addEventListener("click", function () {
    let textString = inputString.value

    if (textString.trim() === ""){
        resultString.textContent = `write something buddy`
    }
    else if (/[0-9]/.test(textString)) {
        resultString.textContent = `this ${textString} numbers it's not allowed`
    }
    else {
        resultString.textContent = `yeah thanks, you wrote: ${textString}`
    }
})