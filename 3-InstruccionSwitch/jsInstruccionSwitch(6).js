function mostrar()
{
    var mensaje;
    var laHora;
    laHora = document.getElementById("hora").value;

    switch (true) {
        case laHora >= 0 && laHora < 7:
            mensaje = "Es de noche.";
            break;

        case laHora >= 7 && laHora < 12:
            mensaje = "Es de mañana.";
            break;

        case laHora >= 12 && laHora < 20:
            mensaje = "Es de tarde.";
            break;

        case laHora >= 20 && laHora <= 24:
            mensaje = "Es de noche.";
            break;

        default:
            mensaje = "La hora no existe.";
            break;
    }

    alert(mensaje);
}