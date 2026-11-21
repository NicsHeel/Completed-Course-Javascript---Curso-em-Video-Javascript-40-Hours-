
let div = document.getElementById("mainDiv")
let result = document.getElementById("divresults")

function yeah () {

    result.textContent = ``

    let cert = document.createElement("img")
    cert.src = "images/certificate.jpg"
    cert.width = 650;
    cert.height = 450;
    let al = document.createElement("a")
    al.textContent = `Cinematographics videos`
    al.href = `http://www.youtube.com/@NicsHeel`
    al.target = `_blank`
    let pr = document.createElement("p")
    pr.textContent = `this is THE BIGGEST NicsHeel certificate, rigth here your ok 👌 day one 08/11/26 finish day 21/11/26`
    result.appendChild(pr)
    result.appendChild(al)
    result.appendChild(cert)

    cert.onerror = function() {
    console.log("Image not found!");
    console.log(cert.src);
};

cert.onload = function() {
    console.log("Image loaded successfully!");
};
}

function No () {

    result.textContent = ``

    let img = document.createElement("img")
    img.src = "images/Pixel.png"
    img.width = 450;
    img.height = 450;
    let p = document.createElement("p")
    p.textContent = `if you click in yeah, you will have an ok 👌 Image tumbnail NicsHeel 2026`
    result.appendChild(p)
    result.appendChild(img)
}

function maybe () {

    result.textContent = ``
    
    let image = document.createElement("img")
    image.src = "images/sheldon.webp";
    image.width = 450;
    image.height = 450;
    let a = document.createElement("a")
    a.textContent = `Also Cinematographics videos`
    a.href = `http://www.youtube.com/@NicsHeel`
    a.target = `_blank`
    let pre = document.createElement("p")
    pre.textContent = `do you know who is him? 🤔 this is the reference of the tumbnail nicsHeel 2026`
    result.appendChild(pre)
    result.appendChild(a)
    result.appendChild(image)
}

