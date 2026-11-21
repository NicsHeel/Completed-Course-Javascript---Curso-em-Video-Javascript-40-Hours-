let btn = document.getElementById("Btn");

btn.addEventListener("click", function () {

    let date = new Date();
    let year = date.getFullYear();

    let InptAge = document.getElementById("inptNumber");
    let result = document.getElementById("result");

    let birthYear = Number(InptAge.value);

    if (InptAge.value.length == 0 || birthYear > year || birthYear <= 999) {

        window.alert("[Error-NicsHeel] Write a valid birth year!");

    } else {

        let sexRadius = document.getElementsByName("radsex");

        let resultcal = year - birthYear;

        let genner = "";

        let image = document.createElement("img");

        image.setAttribute("id", "images");

        if (sexRadius[0].checked) {

            genner = "Men";

            if (resultcal <= 12) {
                image.setAttribute("src", "images/scratch.jpg");
            }
            else if (resultcal <= 17) {
                // adolescente
            }
            else if (resultcal <= 60) {
                // adulto
            }
            else if (resultcal < 90) {
                // idoso
            }
            else {
                // muito idoso
            }

        }

        else if (sexRadius[1].checked) {

            genner = "Woman";

            if (resultcal <= 12) {
                // criança
            }
            else if (resultcal <= 17) {
                // adolescente
            }
            else if (resultcal <= 60) {
                // adulto
            }
            else if (resultcal < 90) {
                // idoso
            }
            else {
                // muito idoso
            }

        }

        result.style.textAlign = "center";

        result.innerHTML = `By my calculations, this person is ${resultcal} years old and is ${genner}.`;

        result.appendChild(image);
    }

});