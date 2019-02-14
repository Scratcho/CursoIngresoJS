function mostrar()
{
	var precio;
	var cantidadDeAmigos;
	var precioConPropina;
	var precioPorPersona;
	var precioConImpuesto;

	precio = prompt("Ingrese el precio de la comida: ");
	cantidadDeAmigos = prompt("Entre cuantas personas desea dividir la cuenta: ");

	precio = parseInt(precio);
	cantidadDeAmigos = parseInt(cantidadDeAmigos);

	precioConPropina = precio * 1.1;

	precioConImpuesto = precioConPropina * 1.21;

	precioPorPersona = precioConImpuesto / cantidadDeAmigos;

	alert("El precio del servicio es $"+precio+" agregando la propina es $"+precioConPropina+" sumando el IVA que te roba AFIP sería $"+precioConImpuesto+" y como ustedes son "+cantidadDeAmigos+", cada uno debe pagar $"+precioPorPersona);
}
