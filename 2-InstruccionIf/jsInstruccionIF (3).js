// Esta funcion devuelve por alert si el usuario es mayor o menor de edad.
function mostrar()
{
    var mensaje;

    if(document.getElementById("edad").value >= 18){
        mensaje = "Usted es mayor de edad";
    }
    else{
        mensaje = "Uested es menor de edad";
    }

    alert(mensaje);
}