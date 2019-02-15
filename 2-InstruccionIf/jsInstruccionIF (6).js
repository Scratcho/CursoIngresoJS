function mostrar()
{
    var valorEdad;
    var mensaje;

    valorEdad = document.getElementById("edad").value;

    if (valorEdad >= 18)
    {
        mensaje = "Usted es mayor de edad";
    }
    else if (valorEdad < 13)
    {
        maensaje = "Usted es un niño";
    }
    else
    {
        maensaje = "Usted es un adolesente";
    }

    alert(mensaje);
}