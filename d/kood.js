/**
 * documentation
 * style
 */

//this is simple comment
/*
console.log("hello world")
console. log("second row")
console.log("third row")*/

console.log("Hello")
console.log("Hello")
console.log("Hello")

let astmeAlus = Number(prompt(`Sisestage astmeAlus`))
let astendaja = Number(prompt(`Sisestage astendaja`))

let tulemus = Math.pow(astmeAlus, astendaja)
console.log(tulemus)
tulemus = astmeAlus + astendaja


let nimi = prompt(`sisestage nimi`)
let lubatudKiirus = Number(prompt(`sisestage lubatud kiirus`))
let tegelikKiirus = Number(prompt(`sisestage tegelik kiirus`))
let trahv = (tegelikKiirus - lubatudKiirus) * 3

let tegelikTrahv = Math.min(trahv, 190)
console.log(nimi + `,kiiruse ületamise eest on teie trahv 190 eurot`)

let ainepunktid = Number(prompt(`Ainepunktide arv`))
let nadalad = Number(prompt(`sisestage nädalate arv`))
let tunnid = ainepunktid * 26
let nadalasToimetan = Math.ceil(tunnid/nadalad)
console.log(nadalasToimetan)