//La siguiente funcion devuelve "Usted no es adolecente", si el valor ingresado es menor a 13 o mayor o igual a 18.
function mostrar()
{
	var valorEdad;

	valorEdad = document.getElementById("edad").value;
    
	if(13 > valorEdad || valorEdad >= 18)
	{    
    		alert("Usted no es adolecente");
    }
}