let num = document.getElementById("inptNum")
let btn = document.getElementById("btn")
let result = document.getElementById("result")

btn.addEventListener("click", function () {

    let n = Number(num.value)
    
    if (n % 2 == 0) {
        result.textContent = `your number is even`
    } 

    else {
        result.textContent = `your number is odd`
    }

})

function evenOdd (inptNum) {
    
    if (inptNum % 2 == 0) {
        return 'your num even'
    } else {
        return 'your num is odd'
    }
}

console.log(evenOdd(67))