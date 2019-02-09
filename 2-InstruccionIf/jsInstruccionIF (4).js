//La siguiente funcion devuelve "Usted es adolecente" por ID, si el valor ingresaso es mayor o igual a 13 y menor que 18
function mostrar()
{
	var valorEdad;

	valorEdad = prompt("Ingrese su edad");
    
    if(13 <= valorEdad){

    	if(valorEdad < 18){

    		document.getElementById("edad").value = "Usted es adolecente";

    	}
        
    }

}