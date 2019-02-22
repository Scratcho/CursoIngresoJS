function mostrar()
{
	var sexo; 

	sexo = prompt("Ingrese f ó m .");

	while(sexo!="m" && sexo!="f")
	{
		sexo = prompt("Error, ingrese f ó m .");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN