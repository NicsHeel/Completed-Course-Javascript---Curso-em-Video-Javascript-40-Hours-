let btn = document.getElementById("Btn");

btn.addEventListener("click", function () {

    let date = new Date();
    let year = date.getFullYear();

    let InptAge = document.getElementById("inptNumber");
    let result = document.getElementById("result");
    
    let birthYear = Number(InptAge.value);

    if (InptAge.value.length == 0 || birthYear > year || birthYear <= 0) {
        window.alert("[Error-NicsHeel] stop kidding me and just write your date")
    }
    else {
        let sexRadius = document.getElementsByName("radsex");

        let resultcal = year - birthYear;

        let genner = "";

        let image = document.createElement("img")

        image.setAttribute('id', 'images')

        if (sexRadius[0].checked) {

            genner = "Men"

            if (resultcal <= 12) {
                //criança
                image.setAttribute("src", "images/scratch.jpg")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
            else if (resultcal <= 17) {
                //adolecente
                image.setAttribute("src", "images/javascript.webp")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
            else if (resultcal <= 60) {
                // adulto
                image.setAttribute("src", "images/c++.jpg")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
            else if (resultcal < 90) {
                //velho
                image.setAttribute("src", "images/Java.png")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
            else {
                //velhissimo
                image.setAttribute("src", "images/linguagem velha.png")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }

            
        }
        else if (sexRadius[1].checked){

            genner = "Woman"

            if (resultcal <= 12) {
                //criança
                image.setAttribute("src", "images/scratch.jpg")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
            else if (resultcal <= 17) {
                //adolecente
                image.setAttribute("src", "images/javascript.webp")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
            else if (resultcal <= 60) {
                // adulto
                image.setAttribute("src", "images/Java.png")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
            else if (resultcal < 90) {
                //velho
                image.setAttribute("src", "images/c++.jpg")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
            else {
                //velhissimo
                image.setAttribute("src", "images/asembly.jpg")
                image.setAttribute("width", "200px")
                image.setAttribute("heigth", "200px")
            }
        }
        result.style.textAlign = 'center'
        result.innerHTML = ` must have ${resultcal} years old and is ${genner}`

        result.appendChild(image);
        
    }
});