//La siguiente funcion devuelve "Usted es adolecente" por alert, si el valor ingresaso es mayor o igual a 13 y menor que 18
function mostrar()
{
	var valorEdad;

	valorEdad = document.getElementById("edad").value;
    
	if(13 <= valorEdad && valorEdad < 18)
	{    
    		alert("Usted es adolecente");
    }
}