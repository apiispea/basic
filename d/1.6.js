let inimesed = 100
let istekohad = 40

let bussidTäidetud = Math.floor(inimesed / kohtiBussis)
let mahaJäänud = inimesed % kohtiBussis

console.log(inimesed + 'Inimeste sõidutamiseks läheb vaja' + bussidTäidetud + 'bussi ja' + mahaJäänud + 'inimest on jäänud maha')