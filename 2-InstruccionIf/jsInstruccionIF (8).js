function mostrar()
{
    var valorEdad;
    var valorEstedoCivil;

    valorEdad = document.getElementById("edad").value;
    valorEstedoCivil = document.getElementById("estadoCivil").value;

    if (valorEdad >= 18 && valorEstedoCivil == "Soltero")
    {
        alert("Es soltero y no es menor.");
    }
}