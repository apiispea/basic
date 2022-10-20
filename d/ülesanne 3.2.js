let ringide_arv=Number(prompt(`Sisestage ringide arv`))
let porgandidkokku = 0
let ring = 1
while(ring<= ringide_arv){
    console.log(`${ring}. ring`)
    if(ring % 2 == 0){
        console.log(`saab ${ring}porgandit`)
        porgandidkokku = porgandidkokku + ring
    }
    ring++
}
console.log(`porgandite koguarv on ${porgandidkokku}.`)