function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random()*10+1);

	console.log(numeroRandom);

	if (numeroRandom >= 9)
	{
		alert("EXCELENTE");
	}
	else if (numeroRandom >= 4)
	{
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}