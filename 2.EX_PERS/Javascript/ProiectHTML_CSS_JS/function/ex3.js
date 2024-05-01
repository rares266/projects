// @ts-nocheck
// Ex. 3 -- Fiind date vârstele a doi copii (a și b) afișați care dintre ei este cel mai mare și cu cât.
document.querySelector(".btnDiferenta")?.addEventListener("click", function Validare3() {
    let varstaCopil1 = document.querySelector(".varstaCopil1")?.value;
    let varstaCopil2 = document.querySelector(".varstaCopil2")?.value;
    let diferenta = 0
    function dif() {
      diferenta = varstaCopil1 - varstaCopil2
      return
    }
    if(varstaCopil1 && varstaCopil2) {
      if (
        varstaCopil1 >= 0 &&
        varstaCopil2 >= 0 &&
        varstaCopil1 <= 100 &&
        varstaCopil2 <= 100
      ) {
        if (varstaCopil1 > varstaCopil2) {
          dif()
          alert('Copilul nr 1 este mai mare cu ' +  Math.abs(diferenta) + ' ani fata de Copilul nr 2.' )
        } else {
          dif()
          alert('Copilul nr 2 este mai mare cu ' + Math.abs(diferenta) + ' ani fata de Copilul nr 1.')
        }
      } else {
        if (varstaCopil1 < 0 || varstaCopil2 < 0) {
          alert('Varsta nu poate lua valori negative. Va rugam introduceti valori intre 0 - 100')
        } else {
          alert('Varsta nu poate fi peste 100 ani.Va rugam introduceti valori intre 0 - 100')
        }
      }
    } else {
      alert('Va rugăm completăti toate campuri corect pentru a continua')
    }
    })