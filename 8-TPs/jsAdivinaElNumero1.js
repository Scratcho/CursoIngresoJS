/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	numeroSecreto=Math.floor(Math.random()*100+1);

	contadorIntentos = 0;

	document.getElementById("intentos").value = contadorIntentos;

	console.log(numeroSecreto);
}

function verificar()
{
	var numeroIngresado;
	var mensaje;

	numeroIngresado = document.getElementById("numero").value;
	numeroIngresado = parseInt(numeroIngresado);

	contadorIntentos++;

	document.getElementById("intentos").value = contadorIntentos;

	if(numeroIngresado==numeroSecreto)
	{
		switch (contadorIntentos)
		{
			case 1:
				mensaje="Seguro hiciste trampa."
				break;

			case 2:
				mensaje="Debe haber sido suerte."
				break;

			case 3:
			case 4:
				mensaje="Bueno, tampoco era para tanto."
				break;

			case 5:
				mensaje="Bastante promedio, nada de que impresionarse."
				break;

			default:
				mensaje="Ya era hora."
				break;
		}
	}
	else
	{
		if (numeroIngresado<numeroSecreto) 
		{
			mensaje="Te falta";
		}
		else
		{
			mensaje="Te pasaste";	
		}
	}

	alert(mensaje);
}