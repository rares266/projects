// @ts-nocheck
//--EX. 1 -- Fiind dată nota unui elev să se afișeze dacă acesta este corigent sau promovat.
document.querySelector('.btn')?.addEventListener('click', function Validare1() {
    const notaElev = parseFloat(document.querySelector('.nota')?.value || '0');
    if (notaElev > 4 && notaElev <= 10) {
      alert('Elevul a promovat')
      input.classList.add('red');
    } else if (notaElev <= 4 && notaElev >= 1) {
      alert('Elevul a picat')
      input.classList.add('red');
    } else if (notaElev > 10 || notaElev < 1) {
      alert('Nota introdusa este incorecta. Valorile trebuie sa fie cuprinse in intervalul 1-10')
    } else {
      alert('Valoare introdusa nu este un numar' + notaElev)
      input.classList.add('red');
    }
  })
