/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultado;

    primerPrecio = document.getElementById("PrecioUno").value;
    segundoPrecio = document.getElementById("PrecioDos").value;
    tercerPrecio = document.getElementById("PrecioTres").value;

    primerPrecio = parseInt(primerPrecio);
    segundoPrecio = parseInt(segundoPrecio);
    tercerPrecio = parseInt(tercerPrecio);

    resultado = primerPrecio + segundoPrecio + tercerPrecio;

    alert("El resultado de la suma es: " + resultado);
}
function Promedio () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultado;

    primerPrecio = document.getElementById("PrecioUno").value;
    segundoPrecio = document.getElementById("PrecioDos").value;
    tercerPrecio = document.getElementById("PrecioTres").value;

    primerPrecio = parseInt(primerPrecio);
    segundoPrecio = parseInt(segundoPrecio);
    tercerPrecio = parseInt(tercerPrecio);

    resultado = (primerPrecio + segundoPrecio + tercerPrecio)/3;

    alert("El resultado del promedio es: " + resultado);
}
function PrecioFinal () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var resultado;

    primerPrecio = document.getElementById("PrecioUno").value;
    segundoPrecio = document.getElementById("PrecioDos").value;
    tercerPrecio = document.getElementById("PrecioTres").value;

    primerPrecio = parseInt(primerPrecio);
    segundoPrecio = parseInt(segundoPrecio);
    tercerPrecio = parseInt(tercerPrecio);

    resultado = (primerPrecio + segundoPrecio + tercerPrecio)*1.21;

    alert("El precio final con IVA es: " + resultado);
}