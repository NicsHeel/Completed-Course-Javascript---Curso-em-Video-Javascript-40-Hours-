/*
var grade = 500
grade = grade * 2 / 1.6

if (grade < 600) {
    console.log(`you faild buddy, try again in the next year`)
}else {
    console.log(`yeah you pass to the next year ${grade}`)
}
*/

function calcular () {
let inputvel = document.getElementById("InputVel")
let result = document.getElementById("result")
let vel = Number(inputvel.value)
let yourvel = document.getElementById("yourvel")

yourvel.innerHTML = `your velocity is ${vel}KM/h`

if(vel > 80){
    result.innerHTML = `you lose haha and you got multed $199.99`
} 
else if (vel < 0) {
    result.innerHTML = `you can not go ${vel}KM/h`
} else {
    result.innerHTML = `you're traveling safely, thanks`
}

}
