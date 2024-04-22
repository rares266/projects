//--Fiind dată nota unui elev să se afișeze dacă acesta este corigent sau promovat.
let notaElev = 5
function Validare1() {
  if (notaElev > 4 && notaElev <= 10) {
    console.log('Elevul a promovat')
  } else if (notaElev <= 4 && notaElev >= 1) {
    console.log('Elevul a picat')
  } else if (notaElev > 10 || notaElev < 1) {
    console.log(
      'Nota introdusa este incorecta. Valorile trebuie sa fie cuprinse in intervalul 1-10'
    )
  } else {
    console.log('Valoare introdusa nu este un numar')
  }
}
Validare1()
//
//
//--La un concurs pot participa copii cu vârste între a și b ani, inclusiv. Gigel are n ani. Stabiliți dacă poate participa la concurs.
//Solicitari de participare concurs
let numeParticipant = 'Gigel'
let varsta = 204
//Conditii de participare concurs
let minVarsta = 12
let maxVarsta = 18
function Validare2() {
  if (varsta >= minVarsta && varsta <= maxVarsta) {
    console.log(
      numeParticipant + ' intruneste conditiile de participare la concurs.'
    )
  } else if (varsta < 0 || varsta > 80) {
    console.log(
      'Valoarea introdusa este incorecta. Varsta necesara este cuprinsa intre ' +
        minVarsta +
        ' - ' +
        maxVarsta +
        ' ani pentru a participa la concurs'
    )
  } else if (varsta < minVarsta || varsta > maxVarsta) {
    console.log(
      numeParticipant +
        ' nu indepliniste varsta necesara cuprinsa intre ' +
        minVarsta +
        ' - ' +
        maxVarsta +
        ' ani pentru a participa la concurs'
    )
  }
}
Validare2()
//
//
//Fiind date vârstele a doi copii (a și b) afișați care dintre ei este cel mai mare și cu cât.
let varstaAndrei = 9
let varstaBogdan = 15
let diferenta = 0
function dif() {
  diferenta = varstaAndrei - varstaBogdan
  return
}
function Validare3() {
  if (
    varstaAndrei >= 0 &&
    varstaBogdan >= 0 &&
    varstaAndrei <= 100 &&
    varstaBogdan <= 100
  ) {
    if (varstaAndrei > varstaBogdan) {
      dif()
      console.log(
        'Andrei este mai mare cu ' +
          Math.abs(diferenta) +
          ' ani fata de Bogdan.'
      )
    } else {
      dif()
      console.log(
        'Bogdan este mai mare cu ' +
          Math.abs(diferenta) +
          ' ani fata de Andrei.'
      )
    }
  } else {
    if (varstaAndrei < 0 || varstaBogdan < 0) {
      console.log(
        'Varsta nu poate lua valori negative. Va rugam introduceti valori intre 0 - 100'
      )
    } else {
      console.log(
        'Varsta nu poate fi peste 100 ani.Va rugam introduceti valori intre 0 - 100'
      )
    }
  }
}
Validare3()
