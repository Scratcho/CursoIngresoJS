function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var acumulador=0;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior--)
	{
		console.log(numeroAnterior);

		if(numeroIngresado%numeroAnterior==0)
		{
			acumulador+=numeroAnterior;
			console.log(acumulador);
		}
	}

	if(numeroIngresado==acumulador)
	{
		console.log("Es perfecto");
	}
	else
	{
		console.log("No es perfecto");
	}
}//FIN DE LA FUNCIÓN