function mostrar()
{
    var laHora;
    var mensaje;
    
    laHora= document.getElementById('hora').value;

    laHora = parseInt(laHora);

    switch (laHora) {
        case 7:
            mensaje = "Es de mañana."
            break;

        case 8:
            mensaje = "Es de mañana."
            break;
            
        case 9:
            mensaje = "Es de mañana."
            break;

        case 10:
            mensaje = "Es de mañana."
            break;

        case 11:
            mensaje = "Es de mañana."
            break;        
    }

    alert(mensaje);
}