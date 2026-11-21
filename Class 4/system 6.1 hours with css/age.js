function load () {
let msg = document.getElementById("msg")
let imagens = document.getElementById("imagen")

let now = new Date()
let hour = now.getHours()
let minuts = now.getUTCMinutes()

    if (hour >= 19 && hour <=23) {
        msg.innerHTML = `good evening, the moon said hi, it's time to code, now it's ${hour}:${minuts}PM`
        imagens.src = `images/Noite.png`
        document.body.style.background = 'rgb(33, 28, 68)'
    }
    else if (hour === 18) {
        msg.innerHTML = `good noon, the sun will back tomorrow, he said goodbay, now it's ${hour}:${minuts}PM`
        imagens.src = `images/anoitcenedo.png`
        document.body.style.background = 'rgb(228, 149, 52)'
    }
    else if (hour >= 12 && hour <= 17) {
        msg.innerHTML = `good afternoon, it's time to code and work on your youtube channel, now it's ${hour}:${minuts}PM`
        imagens.src = `images/Tarde.png`
        document.body.style.background = 'rgb(198, 190, 50)'
    }
    else if (hour >= 6 && hour <= 11) {
        msg.innerHTML = `good morning, it's a good day, the sun is back, it's time to code? nahm, go to school now it's ${hour}:${minuts}PM`
        imagens.src = `images/Dia.png`
        document.body.style.background = 'rgb(121, 173, 237)'
    }
    else {
        msg.innerHTML = `good midnigth, are you sleeping? tomorrow you have a long road to go, now it's ${hour}:${minuts}PM`
        imagens.src = `images/Noite.png`
        document.body.style.background = 'rgb(46, 28, 67)'
    }
    
}