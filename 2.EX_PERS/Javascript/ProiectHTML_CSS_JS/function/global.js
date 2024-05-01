//Functie pentru eliminare numere
function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
  }
  //Functie pentru eliminare litere
  function numbersOnly(input) {
    var regex = /[^0-9]/g;
    input.value = input.value.replace(regex, "");
  }
//Functie ce face legatura cu celelalte 3 ex JS
  ['ex1.js', 'ex2.js', 'ex3.js'].forEach(function(file) {
    var script = document.createElement('script');
    script.src = './function/' + file; 
    script.async = true;
    document.head.appendChild(script);
  });