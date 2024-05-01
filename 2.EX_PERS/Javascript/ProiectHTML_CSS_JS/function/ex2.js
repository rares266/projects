// @ts-nocheck
//--EX. 2 -- La un concurs pot participa copii cu vârste între a și b ani, inclusiv. Gigel are n ani. Stabiliți dacă poate participa la concurs.
// Functie de validare varsta pentru participare concurs
document.querySelector(".btnConcurs")?.addEventListener("click", function Validare2() {
    const numeElev = document.querySelector(".nume")?.value;
    const varsta = document.querySelector(".varsta")?.value;
    const minVarsta = 12;
    const maxVarsta = 18;
    // Verificăm dacă numele și varsta sunt introduse
  if (numeElev && varsta) {
      // Verificăm dacă varsta este un număr valid
      if (!isNaN(varsta)) { 
        if (varsta >= minVarsta && varsta <= maxVarsta) {
          alert(numeElev + " intruneste conditiile de participare la concurs.");
        } else if (varsta < 0 || varsta > 80) {
          alert("Valoarea introdusa pentru varsta este incorecta. Varsta necesara este cuprinsa intre " + minVarsta + " - " + maxVarsta + " ani pentru a participa la concurs.");
        } else {
          alert(numeElev + " nu indeplineste varsta necesara cuprinsa intre " + minVarsta + " - " + maxVarsta + " ani.");
        }
      } else {
        alert("Valoarea introdusa pentru varsta nu este un numar valid.");
      }
    } else{
      alert("Va rugăm completăti toate campuri corect pentru a continua.");
    }
  });