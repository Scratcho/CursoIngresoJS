function mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta;

	while(1)
	{
		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+"# : ");
		numero=parseInt(numero);
		
		if(numero>0)
		{
			positivo=positivo+numero;
		}
		else
		{
			negativo=negativo*numero;
		}

		respuesta=prompt("=>si, para salir");

		if(respuesta=="si")
		{
			break;
		}
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN