
function mostrar()
{
var primerMascota;
var segundaMascota;
var pesoPrimerMascota;
var pesoSegundaMascota;
var pesoTotal;

primerMascota = prompt("Ingrese el nombre de su primer mascota");
pesoPrimerMascota = prompt("Ingrese el peso de "+primerMascota);
segundaMascota = prompt("Ingrese el nombre de su segunda mascota");
pesoSegundaMascota = prompt("Ingrese el peso de "+segundaMascota);

pesoPrimerMascota = parseInt(pesoPrimerMascota);
pesoSegundaMascota = parseInt(pesoSegundaMascota);

pesoTotal = pesoPrimerMascota + pesoSegundaMascota;

alert("Tenes dos mascotas "+primerMascota+" y "+segundaMascota+", que pesan "+pesoPrimerMascota+" y "+pesoSegundaMascota+" kilos, la suma de los kilos es "+pesoTotal);
}
