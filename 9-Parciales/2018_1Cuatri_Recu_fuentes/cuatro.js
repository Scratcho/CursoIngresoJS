function mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioCuatro;
	var mayorPrecio;
	var sumaPrecios;
	var total;
	var descuento=1;

	precioUno = prompt("Ingrese el precio del primer producto:");
	precioDos = prompt("Ingrese el precio del segundo producto:");
	precioTres = prompt("Ingrese el precio del tercer producto:");
	precioCuatro = prompt("Ingrese el precio del cuarto producto:");

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	precioCuatro = parseInt(precioCuatro);

	if(precioUno>=precioDos&&precioUno>=precioTres&&precioUno>=precioCuatro)
	{
		mayorPrecio=precioUno;
	}
	else
	{
		if(precioDos>=precioTres&&precioDos>=precioCuatro)
		{
			mayorPrecio=precioDos;
		}
		else
		{
			if(precioTres>=precioCuatro)
			{
				mayorPrecio=precioTres;
			}
			else
			{
				mayorPrecio=precioCuatro;
			}
		}
	}

	sumaPrecios = precioUno+precioDos+precioTres+precioCuatro;

	if(sumaPrecios>100)
	{
		descuento=0.9;
	}
	else
	{
		if(sumaPrecios>50)
		{
			descuento=0.95;
		}
		else
		{
			descuento=1.15;
		}
	}

	total=sumaPrecios*descuento;

	alert("El precio mas elevado es: "+mayorPrecio+" y el total a abonar es: "+total);
}