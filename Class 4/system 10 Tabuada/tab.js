let btn = document.getElementById("btn")
let inptNum = document.getElementById("inptNumb")
let seltab = document.getElementById("seltab")

btn.addEventListener("click", function () {

    if (inptNum.value.length == "" || inptNum.value <= 0) {
        window.alert("you are focking kidding me, sing the number bro")
    }
    else {
        let n = Number(inptNum.value);

        seltab.textContent = "";
        
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement("option");
            item.text = `${n} x ${c} = ${n*c}`;
            seltab.appendChild(item);
        }
    };
});
