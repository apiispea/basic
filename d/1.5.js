let ainepunktid = Number(prompt(`Ainepunktide arv`))
let nadalad = Number(prompt(`sisestage nädalate arv`))
let tunnid = ainepunktid * 26
let nadalasToimetan = Math.ceil(tunnid/nadalad)
console.log(nadalasToimetan)