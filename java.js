
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var mois=12;
var montant=0;
slider.oninput = function () {
  output.innerHTML = this.value;


  if (this.value < 1500) {/*"this.value me permet de récupérer le montant de la valeur de mon slider*/
var calcul=((this.value*9.90)/100); 
     
    console.log("le intéret brut "+" "+calcul);
   montant=(parseFloat(this.value) + parseFloat(calcul));
    console.log(montant);
var result=(montant/mois);
console.log("la mensualité"+" "+result);


  }}