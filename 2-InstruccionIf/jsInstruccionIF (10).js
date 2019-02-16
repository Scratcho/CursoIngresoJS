function mostrar()
{
	var numeroRandom;
	var mensaje;

	numeroRandom = Math.floor(Math.random()*10+1);

	console.log(numeroRandom);

	if (numeroRandom >= 9)
	{
		mensaje = "EXCELENTE";
	}
	else 
	{
		if (numeroRandom >= 4)
		{
			mensaje = "APROBÓ";
		}
		else
		{
		mensaje = "Vamos, la proxima se puede";
		}
	}
	
	alert(mensaje);
}