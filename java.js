
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;


  if (this.value < 1500) {

    var denominateur = (1 - (1 + (9.9 / 12) ^ (-6)));
    var mensualite = (this.value * (9.9 / 12)) / denominateur;
    console.log(mensualite);
  }

  if (this.value >= 1500 && this.value < 3000) {

    var denominateur = (1 - (1 + (6 / 12) ^ (-6)));
    var mensualite = (this.value * (6 / 12)) / denominateur;
    console.log(mensualite);
  }

  if (this.value >= 3000 && this.value < 5000) {

    var denominateur = (1 - (1 + (5.5 / 12) ^ (-6)));
    var mensualite = (this.value * (5.5 / 12)) / denominateur;
    console.log(mensualite);
  }
}


