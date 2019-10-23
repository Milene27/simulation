
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;


  if (this.value < 1500) {
var calcul=((this.value*9.90)/100); 
     
    console.log("le intéret brut "+" "+calcul);
   montant=(parseFloat(this.value) + parseFloat(calcul));
    console.log(montant);

var result=(montant/mois);
console.log("la mensualité"+" "+result);


  }}
