

var num = 1;

while (num <= 10) {

    console.log(`Wsup, now your number is ${num} and the goal is 10`)

    num += 0.5
}

// Do While:

let ticket = 5;

do {
    console.log(`your got a ${ticket} tickets`);

    ticket++

} while (ticket <= 4);

//

let money = 100;
let works = 0;

while (money <= 600 && works <= 5) {
    console.log(`money ${money} works ${works}`)

    money+=100;
    works++;
}

// For loops:

for (let index = 1; index <= 10; index++) {
    console.log(index)
}

/* Just A system:

let works = 0;
let mymonay = 100;

do {

console.log(`you did ${works} works and you have $${mymonay} dolars`);

mymonay+=100;

works++;

} while (mymonay <= 600 && works <= 5);
*/