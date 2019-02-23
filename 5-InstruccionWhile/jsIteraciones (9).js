function mostrar()
{
	var contador=0;
	// declarar variables
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var numero;
	//var bandera;

	//bandera="es la primera"
	respuesta='si';

	while(respuesta=='si')
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+"# : ");
		numero=parseInt(numero);

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
			//bandera="no";
		}
		else
		{
			if(numero>numeroMaximo)
			{
				numeroMaximo=numero;
			}

			if(numero<numeroMinimo)
			{
				numeroMinimo=numero;
			}
		}

		respuesta=prompt("=>si, para continuar");
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;

}//FIN DE LA FUNCIÓN