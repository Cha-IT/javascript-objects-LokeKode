// Oppgave 1
let informasjonsteknologi1 = {
    spraak: ['HTML', 'CSS'],
    likerFaget: false,
    timetall: 5,
    klasserom: 'C14',
    antallElever: 24
}

informasjonsteknologi1.spraak.push('JavaScript')
informasjonsteknologi1.antallElever = 13
informasjonsteknologi1.likerFaget = true
delete informasjonsteknologi1.timetall

for (i = 0; i < 3; i++) {
    console.log(informasjonsteknologi1.spraak[i])
}
