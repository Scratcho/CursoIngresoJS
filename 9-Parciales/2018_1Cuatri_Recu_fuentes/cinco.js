function mostrar()
{
	var paquete;
	var medioDePago;
	var descuento=1;

	medioDePago=prompt("Seleccione el medio de pago: ");
	paquete=prompt("Seleccione el paquete: ");

	switch(medioDePago)
	{
		case "visa":
			descuento=0.9;
			break;
		case "paypal":
			descuento=0.85;
			break;
		case "mercadoPago":
			descuento=0.9;
		case "efectivo":
			descuento=0.8;
			break;
		default:
			descuento=0.95
			break;

	}
}
