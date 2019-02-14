function mostrar()
{
	var precio;
	var descuento;
	var roboPorAfip;

	precio = document.getElementById('elPrecio').value;

	precio = parseInt(precio);

	descuento = precio * 0.9;

	roboPorAfip = descuento * 1.21;

	alert("Tu compra es de $"+precio+" tenes un descuento del 10% queda en $"+descuento+", y con el robo de AFIP $"+roboPorAfip);
}
