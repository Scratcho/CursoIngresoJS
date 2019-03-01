function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var numeroRecorido;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorido=numeroIngresado-1;numeroRecorido>1;numeroRecorido--)
	{

		for(numeroAnterior=numeroRecorido-1;numeroAnterior>1;numeroAnterior--)
		{
			//console.log(numeroAnterior);

			if(numeroRecorido%numeroAnterior==0)
			{
				break;
			}
		}

		if(numeroAnterior==1)
		{
			console.log(numeroRecorido+" es primo");
		}
	}
}//FIN DE LA FUNCIÓN