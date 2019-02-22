function mostrar()
{
	var claveCorrecta;
	var clave;

	claveCorrecta="utn150";

	clave = prompt("ingrese el número clave.");

		while (clave!=claveCorrecta)
		{
		clave = prompt("error, ingrese el número clave.");
		}

	alert("Bienvenido");
}