
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;

let montantDue;

  if (this.value < 1500) 
  {
    
   
    console.log(mensualite);
  }
}








function Mef(valeur)	// pour cadrage des valeurs //
	/////////////////////////////////////////////////////
	{ 	return valeur.toFixed(2);	}
	///////////////////////////////////////////////
	function Calcul()	// calcul des échéances //
	/////////////////////////////////////////////
	{	var Af=Number(document.Saisie.Montant.value);
		if ( Af<1 )
					alert ("montant du prêt erroné");
		else	{	var Y=Number(document.Saisie.Duree.value);
					if ( Y<1 || Y>500 )
							alert("Durée erronée");
					else	{	var Ir=Number(document.Saisie.Taux.value);
								if ( Ir<1 || Ir>20 )
										alert("Taux erroné");
								else	{	var Nf = Y * 12;
											var Rf = (Ir / 1200);
											var P1 = Af * ( Rf / ( 1 - ( 1 / ( Math.pow ( ( 1 + Rf ), Nf ) ) ) ) ) ;
											var Pf = Math.floor ( ( P1 + 0.005 ) * 100) / 100;
										    var impr=   "<"+"b /><"+"br />PrÃªt de "+
														document.Saisie.Montant.value+
														"â‚¬ sur "+
														document.Saisie.Duree.value+
														" ans, au taux de "+
														document.Saisie.Taux.value+
														"% => EchÃ©ances de " +
														Pf+
														"â‚¬ par mois<"+"br /><"+"br />";
											var Amort=new Array();
											Amort[0,1] = Af;
											var Cp=0;
											var Ci=0;
 
											for ( var I=1 ; I <= Nf ; I++ )
											{	Amort[I, 2] = Amort[I - 1, 1] * Rf;
												Amort[I, 2] = Math.floor((Amort[I, 2] + 0.005) * 100) / 100;
												Amort[I, 1] = Amort[I - 1, 1] - Pf + Amort[I, 2];
												Amort[I, 1] = Math.floor ( ( Amort[I, 1] + 0.005 ) * 100 ) / 100;
												var T1 = I - Math.floor ( ( I - 1 ) / 12 ) * 12;
												var T2 = 1 + Math.floor ( ( I - 1 ) / 12 );
 
												Cp = Cp + Pf - Amort[I, 2];
												Ci = Ci + Amort[I, 2];
											}
											Cp = Math.floor((Cp + 0.005) * 100) / 100;
											Ci = Math.floor((Ci + 0.005) * 100) / 100;
										document.getElementById("result").innerHTML=impr;
											if ( document.Saisie.imprimer.checked )
											{	window.print();	}
										}
							}
				}
	}

