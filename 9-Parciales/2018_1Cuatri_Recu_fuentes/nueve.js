//1. mayor precio y la marca del mismo.
//2. Promedio precio.
//3. Cantidad de celulares que valen mas de 1000.
//4. Marca y tamaño del mas caro.
//5. Marca y tamaño del mas barato.
//6. El prime celular que vale 1000.
//7. Precio del ultimo celular LG.
function mostrar()
{
	var marca;
	var tamaño; //Numero
	var precio;
	var respuesta;
	var contador;
	var promedio;
	var acumulador;
	var mayorPrecio;
	var mayorPrecioMarca
	var mayorPrecioTamaño;
	var menorPrecio;
	var menorPrecioMarca;
	var menorPrecioTamaño;
	var contadorPrecioMas2000;
	var primeroDe1000Precio;
	var primeroDe1000Marca;
	var ultimoLgPrecio;

	contador=0;

	while(respuesta!="salir")
	{
		marca=prompt("Ingrese la marca del equipo:");

		tamaño=prompt("Ingrese el tamaño del equipo marca "+marca+":");
		tamaño=parseInt(tamaño);
		while(tamaño<1)
		{
			tamaño=prompt("Por favor ingrese un tamaño valido para el equipo marca "+marca+":");
			tamaño=parseInt(tamaño);
		}

		precio=prompt("Ingrese el precio del equipo marca "+marca+":");
		precio=parseInt(precio);
		while(precio<0||precio>10000)
		{
			precio=prompt("Por favor ingrese un precio valido para el equipo marca "+marca+":");
			precio=parseInt(precio);
		}

		
		respuesta=prompt("Ingrese 'salir' para abandonar la carga de datos");

		acumulador=acumulador+precio;

		if(contador==0)
		{
			mayorPrecio=precio;
			mayorPrecioMarca=marca;
			mayorPrecioTamaño=tamaño;
			menorPrecio=precio;
			menorPrecioMarca=marca;
			menorPrecioTamaño=tamaño;
		}
		else
		{
			if(precio>mayorPrecio)
			{
				mayorPrecio=precio;
				mayorPrecioMarca=marca;
				mayorPrecioTamaño=tamaño;
			}
			if(precio<menorPrecio)
			{
				menorPrecio=precio;
				menorPrecioMarca=marca;
				menorPrecioTamaño=tamaño;
			}
		}

		if(precio>2000)
		{
			contadorPrecioMas2000++;
		}

		if(precio==1000&&primeroDe1000Precio!=1000)
		{
			primeroDe1000Precio=precio;
			primeroDe1000Marca=marca;
		}

		if(marca=="lg"||marca=="LG"||marca=="Lg"||marca=="lG")
		{
			ultimoLgPrecio=precio;
		}

		contador++;	
	}

	promedio = acumulador/contador;

document.write("2. Precio promedio: "+promedio+"<br>"+
				"3. Cantidad de celus de mas de 2000: "+contadorPrecioMas2000+"<br>"+
				"4. Mayor precio: ")
}
