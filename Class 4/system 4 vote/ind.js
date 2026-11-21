let input = document.getElementById("inptNum")
let btn = document.getElementById("Btn")
let result = document.getElementById("result")
let yourage = document.getElementById("yourage")

btn.addEventListener("click", function(){
    let age = Number.parseInt(input.value)
    yourage.textContent = `you have ${age} years old`

    if(age < 0){
        result.textContent = `you have negative age?`
    }
    else if(age >= 100){
        result.textContent = `you are so old, enjoy your entire life and dont make the L`
    }
    else if(age >= 65){
        result.textContent = `vote not mandatory`
    }
    else if(age >= 18){
        result.textContent = `vote mandatory`
    }
    else if(age >= 16){
        result.textContent = `vote not mandatory`
    }
    else {
        result.textContent = `not vote`
    }
})