let btn = document.getElementById("btn");
let stepinpt = document.getElementById("steps");
let inptTarget = document.getElementById("inptlast");
let inptFist = document.getElementById("inptFist");
let result = document.getElementById("result");

btn.addEventListener("click", function () {

    //if theres not Numbers:

    if (inptFist.value.trim() === "" || inptTarget.value.trim() === "") {

        window.alert("just put your numbers already ");

    // If theres not steps, put one

    } else if (stepinpt.value <= 0 ) {

        window.alert("you dont put the steps correctly, and its going to be 1");
        stepinpt.value = 1;
    }

    // Else, calcule the steps to get the number 

    else {
        let FirtNum = Number(inptFist.value);
        let steps = Number(stepinpt.value);
        let target = Number(inptTarget.value);
        
        result.textContent = ""

        if (FirtNum <= target) {
            while (FirtNum <= target) {
                result.textContent += `${FirtNum} \u{1F596}`
                FirtNum += steps;
            }
            }
        else {
            while (FirtNum >= target) {
                result.textContent += `${FirtNum} \u{1F596}`
                FirtNum -= steps;
            }
            }
            result.textContent += `🛹`
    };

});

/*
         For:
        for (FirtNum; FirtNum <= target || FirtNum >= target; FirtNum = FirtNum += target);
        */