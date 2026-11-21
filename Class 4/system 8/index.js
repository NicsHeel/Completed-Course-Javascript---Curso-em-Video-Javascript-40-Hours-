// Create Elements Html:

let div = document.createElement("div");
div.setAttribute("id", "container")

let title = document.createElement("h1");
title.textContent = "Calcule your age";

let label = document.createElement("label");
label.textContent = "Put your year:";

let inputAge = document.createElement("input");
inputAge.setAttribute("type", "number");
inputAge.setAttribute("placeholder", "Your Age");

let Btn = document.createElement("button");
Btn.textContent = "Calcule";

let result = document.createElement("p");

let direitosAut = document.createElement("p");
direitosAut.textContent = `\u00A9 2026 NicsHeel Inventions`

// Calculation and Result Section:

Btn.addEventListener("click", function () {
    
    let now = new Date();
    let year = now.getFullYear();

    if (inputAge.value.trim() == "" || inputAge.value > year || inputAge.value <= 0) {
        window.alert("are you focking kidding me, put that correctly i got stuff to do");
    }
    else {
        let CalAge;
        CalAge = year - Number(inputAge.value);
        result.textContent =  `you must have ${CalAge} years old`;
    }
});


// Put javascript in Html: ElementDad.appendChild(ElementChild);

div.appendChild(title);
div.appendChild(label);
div.appendChild(inputAge);
div.appendChild(Btn);
div.appendChild(result);
div.appendChild(direitosAut);

document.body.appendChild(div);

// test

console.log("is it working?");