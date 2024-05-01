// Obține elementele necesare
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Când utilizatorul dă clic pe X, închide fereastra modală
span.onclick = function() {
  modal.style.display = "none";
}

// Când utilizatorul dă clic în afara ferestrei modale, închide fereastra modală
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Afiseaza fereastra modală
modal.style.display = "block";
