function mostrar()
{
    var laHora = document.getElementById('hora').value;

    //laHora = parseInt(laHora);

    switch (true) {
        case laHora >= 0 && laHora < 7:
            alert("Es de noche.");
            break;

        case laHora >= 7 && laHora < 12:
            alert("Es de mañana.");
            break;

        case laHora >= 12 && laHora < 20:
            alert("Es de tarde.")
            break;

        case laHora >= 20 && laHora <= 24:
            alert("Es de noche.");
            break;

        default:
            alert("La hora no existe.")
            break;
    }
}