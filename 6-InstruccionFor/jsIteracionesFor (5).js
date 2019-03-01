function mostrar()
{
	var numeroIngresado;
	var numeroRecorrido;
	var numeroAnterior;
	var numeroPosterior;
	var acumuladorPredecesores;
	var acumuladorPosteriores;

	numeroIngresado=prompt("Ingrese numero:");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>0;numeroRecorrido--)
	{
		acumuladorPredecesores=0;
		for(numeroAnterior=numeroRecorrido-1;numeroAnterior>0;numeroAnterior--)
		{
			acumuladorPredecesores=acumuladorPredecesores+numeroAnterior;
		}

		acumuladorPosteriores=0;
		for
		//console.log(numeroRecorrido);
		//console.log(acumuladorPredecesores);

		if(acumuladorPredecesores==((numeroRecorrido+1)+(numeroRecorrido+2)))
		{
			console.log(numeroRecorrido+" es centro numerico");
		}
	}




}//FIN DE LA FUNCIÓN