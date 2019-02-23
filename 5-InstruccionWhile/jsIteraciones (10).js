function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var sumaNegativos=0;//ok
	var sumaPositivos=0;//ok
	var cantidadPositivos=0;//ok
	var cantidadNegativos=0;//ok
	var cantidadCeros=0;//ok
	var cantidadPares=0;//ok
	var promedioPositivos=0;//ok
	var promedioNegativos=0;//ok
	var diferenciaPositivosNegativos=0;//ok
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+"# : ");
		numero=parseInt(numero);
		
		if(numero==0)
		{
			cantidadCeros=cantidadCeros+1;
		}
		else
		{
			if(numero<0)
			{
				sumaNegativos=sumaNegativos+numero;
				cantidadNegativos=cantidadNegativos+1;
			}
			else
			{
				sumaPositivos=sumaPositivos+numero;
				cantidadPositivos=cantidadPositivos+1;
			}
		}
		if((numero%2)==0&&numero!=0)
		{
			cantidadPares=cantidadPares+1;
		}

		respuesta=prompt("responda 'no' para salir.");
	
	}
	promedioPositivos=sumaPositivos/cantidadPositivos;
	promedioNegativos=sumaNegativos/cantidadNegativos;
	diferenciaPositivosNegativos=sumaPositivos+sumaNegativos;

	document.write("1-Suma de los negativos: "+sumaNegativos+"</br>"+
					"2-Suma de los positivos: "+sumaPositivos+"</br>"+
					"3-Cantidad de positivos: "+cantidadPositivos+"</br>"+
					"4-Cantidad de negativos: "+cantidadNegativos+"</br>"+
					"5-Cantidad de ceros: "+cantidadCeros+"</br>"+
					"6-Cantidad de números pares: "+cantidadPares+"</br>"+
					"7-Promedio de positivos: "+promedioPositivos+"</br>"+
					"8-Promedios de negativos: "+promedioNegativos+"</br>"+
					"9-Diferencia entre positivos y negativos, (positvos-negativos): "+diferenciaPositivosNegativos+"</br>");



}//FIN DE LA FUNCIÓN