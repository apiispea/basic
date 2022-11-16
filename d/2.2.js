let vanus = Number(prompt('Sisesta vanus'))
let sugu = Number(prompt('Sisesta sugu'))
let treening = Number(prompt('Sisesta treeningu tüüp'))
let pulsisagedus;

if(sugu == 'm' || sugu == 'M'){
    var pulsisagedus = 220 - vanus
}else if (sugu == 'n' || sugu == 'N'){
    pulsisagedus = 206 - 0.88 * vanus
}
let minPulsisagedus;
let maxPulsisagedus;

if (treening == 1){
    minPulsisagedus = 0.5 * pulsisagedus
    maxPulsisagedus = 0.7 * pulsisagedus
}else if (treening == 2){
    minPulsisagedus = 0.7 * pulsisagedus
    maxPulsisagedus = 0.8 * pulsisagedus
}else if (treening == 3){
    minPulsisagedus = 0.8 * pulsisagedus
    maxPulsisagedus = 0.87 * pulsisagedus
}

console.log('Pulsisagedus peab olema vahemikus ' +
Math.round(minPulsisagedus) + "kuni" + Math.round(maxPulsisagedus))