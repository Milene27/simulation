
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;



slider.oninput = function () {
  output.innerHTML = this.value;

var mois =12;
var montant=0;

  if (this.value < 1500) {
        var calcul=((this.value*9.90)/100); 
        var mensualite = document.getElementById("mensual");

        montant=(parseFloat(this.value) + parseFloat(calcul));
 
    var result=(montant/mois);
    mensualite.innerHTML = result;

mensualite.oninput = function () {
    mensualite.innerHTML = this.result;
}
  }
}
