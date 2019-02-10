function mostrar()
{
    var valorEdad;

    valorEdad = document.getElementById("edad").value;

    if (valorEdad >= 18)
    {
        alert("Usted es mayor de edad");
    }
    else if (valorEdad < 13)
    {
        alert("Usted es un niño");
    }
    else
    {
        alert("Usted es un adolesente");
    }
}