
/*
let n = [2, 3, 1, 4, 9, 7, 4, 5, 8, 6]

n.sort();

console.log(n)

let num = [2, 3, 1, 4, 9, 7, 4, 5, 8, 6]

num.length

console.log(num)

for (let i = 0; i < num.length; i++){
    console.log(`o index ${i} tem o valor: ${num[i]}`)
}
*/
let tricks = ["kickflip", "treflip", "heelflip"]

tricks.push("nose many")

tricks[0] = "ollie"

console.log(`how many tricks? ${tricks.length}`);

tricks[1] = "nollie"

tricks.sort()

tricks.unshift("varialheel")

// for para botar no console.log sem [ ]

for (let i in tricks) {
    console.log(`in the index ${i} you have the ${tricks[i]}`)
}

// Se treflip for diferente -1 (quando nao se encontra)

if (tricks.indexOf("treflip") != -1) {
    console.log(`trick found`)
} else {
    console.log(`trick not found, the new is ${tricks[1]}`)
}

// Include, Bollean true or false

let have = tricks.includes("nose many")

console.log(`it has nose many? ${have}; what is the index? ${tricks.indexOf("nose many")};`)

console.log(tricks.indexOf("varialheel"))

// Splice Method:

tricks.splice(2, 0, "banana flip")

tricks.splice(3, 1) // now we dont have the nollie

console.log(tricks)
