/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var valorAncho;
    var valorLargo;
    var valorTotal;

    valorAncho = document.getElementById("Ancho").value;
    valorLArgo = document.getElementById("Largo").value;

    valorAncho = parseInt(valorAncho);
    valorLargo = parseInt(valorLargo);

    valorTotal = (valorAncho * 2 + valorLargo * 2) * 3;

    alert("La cantidad de metros necesarios es de " + valorTotal);
}
function Circulo () 
{
    var valorRadio;
    var valorTotal;
    
    valorRadio = document.getElementById("Radio");

    valorRadio = parseInt(valorRadio),

    valorTotal = valorRadio * 2 * Math.PI;

    valorTotal = Math.floor(valorTotal) + 1;
    
}
function Materiales () 
{
	
}