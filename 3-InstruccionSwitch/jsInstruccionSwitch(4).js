function mostrar()
{
    var mensaje;
    var mesDelAño;
    
    mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Enero":
            mensaje = "Este mes tiene 31 dias.";
            break;

        case "Febrero":
            mensaje = "Este mes tiene 28 dias.";
            break;

        case "Marzo":
            mensaje = "Este mes tiene 31 dias.";
            break;

        case "Abril":
            mensaje = "Este mes tiene 30 dias.";
            break;

        case "Mayo":
            mensaje = "Este mes tiene 31 dias.";
            break;

        case "Junio":
            mensaje = "Este mes tiene 30 dias.";
            break;

        case "Julio":
            mensaje = "Este mes tiene 31 dias.";
            break;

        case "Agosto":
            mensaje = "Este mes tiene 31 dias.";
            break;

        case "Septiembre":
            mensaje = "Este mes tiene 30 dias.";
            break;
            
        case "Octubre":
            mensaje = "Este mes tiene 31 dias.";
            break;

        case "Noviembre":
            mensaje = "Este mes tiene 30 dias.";
            break;

        case "Diciembre":
            mensaje = "Este mes tiene 31 dias.";
            break;

    }

    alert(mensaje);
}