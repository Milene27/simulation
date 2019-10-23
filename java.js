
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var mois = 12;
var montant = 0;



slider.oninput = function () {
  output.innerHTML = this.value;

  var mois = 12;
  var montant = 0;

/*"this.value me permet de récupérer le montant de la valeur de mon slider*/
    var taeg = 9.90;
    var calcul = ((this.value * taeg) / 100);

    console.log("le intéret brut " + " " + calcul);
    montant = (parseFloat(this.value) + parseFloat(calcul));
    if (this.value < 1500) {
      var calcul = ((this.value * taeg) / 100);
      console.log("le intéret brut " + " " + calcul);
      montant = (parseFloat(this.value) + parseFloat(calcul));
      console.log(montant);
      var result = (montant / mois);
      console.log("la mensualité" + " " + result);

    }
    else if (this.value >= 1500 && this.value < 3000) {
      console.log("coucou");
      var taeg = 6;

      var calcul = ((this.value * taeg) / 100);

      montant = (parseFloat(this.value) + parseFloat(calcul));

      var result = (montant / mois);

    }
    else 

{
      var taeg = 5.5;
      var calcul = ((this.value * taeg) / 100);

      montant = (parseFloat(this.value) + parseFloat(calcul));

      var result = (montant / mois);


    }

    document.getElementById("Mensualité").innerHTML = "Mensualité : " + result.toFixed(2);
    document.getElementById("montant").innerHTML = "Montant : " + montant.toFixed(2);
    document.getElementById("TAEG").innerHTML = "TAEG : " + taeg;


  }



