
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var mois = 12;
var montant = 0;



slider.oninput = function () {
  output.innerHTML = this.value;

var mois =12;
var montant=0;

  if (this.value < 1500) {/*"this.value me permet de récupérer le montant de la valeur de mon slider*/
  var taeg = 9.90;
  var calcul=((this.value * taeg)/100); 
     
    console.log("le intéret brut "+" "+calcul);
   montant=(parseFloat(this.value) + parseFloat(calcul));
  if (this.value < 1500) {
    var calcul = ((this.value * taeg) / 100);
    console.log("le intéret brut " + " " + calcul);
    montant = (parseFloat(this.value) + parseFloat(calcul));
    console.log(montant);
    var result = (montant / mois);
    console.log("la mensualité" + " " + result);

  }

  if (this.value >= 1500 && this.value < 3000) {
    var taeg = 6;

    var calcul = ((this.value * taeg) / 100);
    console.log("le intéret brut " + " " + calcul);
    montant = (parseFloat(this.value) + parseFloat(calcul));
    console.log(montant);
    var result = (montant / mois);
    console.log("la mensualité" + " " + result);
  }

    if (this.value < 1500) {
      var calcul = ((this.value * 9.90) / 100);
      console.log("le intéret brut " + " " + calcul);
      montant = (parseFloat(this.value) + parseFloat(calcul));
      console.log(montant);
      var result = (montant / mois);
      console.log("la mensualité" + " " + result);

    }

    document.getElementById("Mensualité").innerHTML = "Mensualité : " + result.toFixed(2);/* me permet de d'indiquer le montant de la valeur sur  ma  page HTML */
    document.getElementById("montant").innerHTML = "Montant : " + montant.toFixed(2);
    document.getElementById("TAEG").innerHTML = "TAEG : " + taeg;

      var calcul = ((this.value * 5.5) / 100);
      console.log("le intéret brut " + " " + calcul);
      montant = (parseFloat(this.value) + parseFloat(calcul));
      console.log(montant);
      var result = (montant / mois);
      console.log("la mensualité" + " " + result);
    }
  }
}

