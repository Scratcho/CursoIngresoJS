function mostrar()
{
	var sexo;
	var nota;
	var contador=0;
	var acumulador=0;
	var promedio;
	var menorNota;
	var sexoMenorNota;
	var contadorVarones=0;

	while(contador<5)
	{
		contador=contador+1;
		nota=prompt("Ingrese nota del alumno "+contador+"# (entre 0 y 10).")

		while(nota<0||nota>10)
		{
			nota=prompt("error, ingrese una nota valida (entre 0 y 10) para el alumno "+contador+"#.");
		}

		nota=parseInt(nota);
		
		sexo=prompt("Ingrese sexo del alumno "+contador+"# ('f' o 'm').");

		while(sexo!="f"&&sexo!="m")
		{
			sexo=prompt("Error, ingrese un sexo valido ('f' o 'm') para el alumno "+contador+"#.");
		}

		if(contador==1)
		{
			menorNota=nota;
			sexoMenorNota=sexo;
		}
		else
		{
			if(menorNota>nota)
			{
				menorNota=nota;
				sexoMenorNota=sexo;
			}
		}

		if(nota>=6&&sexo=="m")
		{
			contadorVarones=contadorVarones+1;
		}

		acumulador=acumulador+nota;
		
	}

	promedio=acumulador/5;

	alert("El promedio de las notas totales es: "+promedio+"\r\n"+
			"La nota mas baja es "+menorNota+" de una persona de sexo "+sexoMenorNota+". \r\n"+
			"La cantidad de varones con nota mayor o igual a 6 es: "+contadorVarones);
}
