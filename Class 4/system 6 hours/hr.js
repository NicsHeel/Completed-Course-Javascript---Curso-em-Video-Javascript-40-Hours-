let ResultH3 = document.getElementById("ResultH3")
let ResultDiaetc = document.getElementById("ResultDiaetc")
let weekH3 = document.getElementById("resultweek")

let now = new Date()
let hours = now.getHours()
let minutes = now.getMinutes();
let day = now.getDate()
let week = now.getDay()
let month = now.getUTCMonth()
let year = now.getFullYear()

ResultDiaetc.textContent = `${day}/${month}/${year}`

month += 1;


if (hours <= 5) {
    ResultH3.textContent = `Good Midle of nigth, it's ${hours}:${minutes} AM`
}
else if (hours <= 11) { 
    ResultH3.textContent = ` good morning, now is ${hours}:${minutes} AM`
}
else if (hours <= 18) {
    ResultH3.textContent = `good afternoon, now its ${hours}:${minutes} PM`
}
else if (hours <= 23 ) {
    ResultH3.textContent = `good evening, now its ${hours}:${minutes} PM`
}


switch (week) {
    case 0:
        weekH3.textContent = `today its Sunday`
        break
    case 1:
        weekH3.textContent = `today is monday`
        break
    case 2:
        weekH3.textContent = `today its tuesday`
        break
    case 3:
        weekH3.textContent = `today is wednesday`
        break
    case 4:
        weekH3.textContent = `today its thursday`
        break
    case 5:
        weekH3.textContent = `today is friday`
        break
    case 6:
        weekH3.textContent = `today is saturday`
        break
    default:
        weekH3.textContent = `[Error Nics-Heel] sorry ladies and gentlemens, it can has mistakes`
}