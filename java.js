
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var mois=12;
var montant=0;
slider.oninput = function () {
  output.innerHTML = this.value;

let montantDue;

  if (this.value < 1500) {
var calcul=((this.value*9.90)/100); 
     
    console.log("le intéret brut "+" "+calcul);
   montant=(parseFloat(this.value) + parseFloat(calcul));
    console.log(montant);
var result=(montant/mois);
console.log("lla mensualité"+" "+result);

    var denominateur = (1 - Math.pow(1 + (9.9 / 12),(-6)));
    var mensualite = (this.value * (9.9 / 12)) / denominateur;
    console.log(mensualite);
  }
/*
  if (this.value >= 1500 && this.value < 3000) {

    var denominateur = (1 - Math.pow(1.5,-6));
    var mensualite = (this.value * 0.5) / denominateur;
    console.log(mensualite.toFixed(2));
  }

  if (this.value >= 3000 && this.value < 5000) {

    var denominateur = (1 - (1 + (5.5 / 12) ^ (-6)));
    var mensualite = (this.value * (5.5 / 12)) / denominateur;
    console.log(mensualite);
  }*/
}




