let valik = prompt('Kas soovid istekoha ise valida "Ise" või loosida "Loos"')
let koht

if (valik == 'ise'){
    let kohaValik = prompt('Kas soovite istuda akna ääres "Aken" või mujal "Muu"')
    console.log('Valisite ise')
    if (kohaValik == 'aken'){
        koht = 'aknakoht'
    }else if (kohaValik == 'muu'){
        koht = 'vahekäigukoht'
    }
}else if (valik == 'loos'){
    console.log('istekoht loositi')
    let juhuarv = Math.ceil(Math.round() *3)
    if (juhuarv == 1) {
        koht = 'aknakoht'
    }else {
        koht = 'vahekäigu koht'
    }
}
console.log(koht)