let inptNum = document.getElementById("inptNum")
let btnAdd = document.getElementById("btnAdd")

let select = document.getElementById("select")
let btnAnalyty = document.getElementById("btnAnaly")
let resetBtn = document.getElementById("resetBtn")

let resultP = document.getElementById("result")
let result2 = document.getElementById("result2")
let result3 = document.getElementById("result3")
let result4 = document.getElementById("result4")
let result5 = document.getElementById("result5")

btnAdd.addEventListener("click", function () {
        
    resultP.textContent = "";
    result2.textContent = "";
    result3.textContent = "";
    result4.textContent = "";
    result5.textContent = "";

    let num = Number(inptNum.value)

    if (num < 1 || num > 100) {

        window.alert("damn it, sing it correctly, read the titles")

    } 

    else {

        let exists = select.querySelector(`option[value="${num}"]`);
        
        if (exists) {

            window.alert("this number already exist")

        }
        
        else {

            let item = document.createElement("option");

            item.value = num;
            item.textContent = `Value ${num} add`;

            select.appendChild(item);

        }}

        inptNum.value = ``
        inptNum.focus()

    resetBtn.addEventListener("click", function () {

        resultP.textContent = "";
        result2.textContent = "";
        result3.textContent = "";
        result4.textContent = "";
        result5.textContent = "";

        select.options.length = ""

        })

    
});

btnAnalyty.addEventListener("click", function () {

        if (select.options.length == "") {

            window.alert("There are no elements in the list");

        } else {

            let numbers = [];
            for (let i = 0; i < select.options.length; i++) {
            numbers.push(Number(select.options[i].value));
            }

            let sum = 0;
            for (let number of numbers) {
            sum += number;
            }

            let lengthlist = select.options.length;
            let average = sum / numbers.length;
            let maxN = Math.max(...numbers);
            let MinN = Math.min(...numbers);

            resultP.textContent = `The length of the list is: ${lengthlist}`;
            result2.textContent = `The bigger value is ${maxN}`;
            result3.textContent = `The smallest number is ${MinN}`
            result4.textContent = `The sum of all numbers is ${sum}`;
            result5.textContent = `The average is ${average}`;

    }
    
});