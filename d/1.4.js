let nimi = prompt(`sisestage nimi`)
let lubatudKiirus = Number(prompt(`sisestage lubatud kiirus`))
let tegelikKiirus = Number(prompt(`sisestage tegelik kiirus`))
let trahv = (tegelikKiirus - lubatudKiirus) * 3

let tegelikTrahv = Math.min(trahv, 190)
console.log(nimi + `,kiiruse ületamise eest on teie trahv 190 eurot`)