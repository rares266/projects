let numarSticleApa = 0;
let capacitateVas = 1;

function calculeazaCapacitateVas() {
    return capacitateVas - numarSticleApa;
}

function validareDate() {
    if (numarSticleApa < 0 || capacitateVas <= 0) {
        console.log("Vă rugăm să introduceți valori pozitive mai mari de 0 pentru capacitatea vasului si valori pozitive sau egale cu 0 pentru numărul de sticle de apă.");
    }

    else if (numarSticleApa > capacitateVas) {
        console.log("Capacitatea vasului este depășită. Au fost introduse " + numarSticleApa + " sticle de apă, iar capacitatea vasului este de " + capacitateVas + " litri.");
    }

    else if(numarSticleApa >= 0 && capacitateVas > 0){
        console.log("În vasul de capacitate " + capacitateVas + " litri au fost introduse " + numarSticleApa + " sticle de apă la 1L.");
        console.log("Mai puteți introduce încă " + calculeazaCapacitateVas() + " sticle de apă la 1L.");
    
    } else{
        console.log("Valoarea introdusa este incorecta");
    }

}

validareDate();
