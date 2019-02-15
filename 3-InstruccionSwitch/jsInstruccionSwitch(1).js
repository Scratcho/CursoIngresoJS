function mostrar()
{ 
    var mensaje;
    var mesDelAño;
    
    mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Enero":
            mensaje = "Que comiences bien el año!!!.";
            break;
        case "Marzo":
            mensaje = "A clases!!!.";
            break;
        case "Julio":
            mensaje = "Se vienen las vacaciones!!!.";
            break;
        case "Diciembre":
            mensaje = "Felices fiesta!!!.";
            break;
    }
}