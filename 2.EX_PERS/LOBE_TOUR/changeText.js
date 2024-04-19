// Funcția care schimbă textul
function changeText() {
  // Afișăm textul din array la indexul curent
  document.getElementById('changingText').textContent = texts[currentIndex]

  // Incrementăm indexul sau revenim la 0 dacă am ajuns la finalul array-ului
  currentIndex = (currentIndex + 1) % texts.length
}
