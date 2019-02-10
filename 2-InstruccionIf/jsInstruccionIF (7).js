function mostrar()
{
    var valorEdad;
    var valorEstadoCivil;

    valorEdad = document.getElementById("edad").value;
    valorEstadoCivil = document.getElementById("estadoCivil").value;

    if (valorEdad < 18 && valorEstadoCivil != "Soltero")
    {
        alert("Es muy pequeño para NO ser soltero.")
    }
}