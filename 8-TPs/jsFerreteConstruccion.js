/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

/*2.Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo 
y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara 
el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas
 de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan 
 de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio;
var resultado;
var resultadoDos;
function Rectangulo () 
{

largo=document.getElementById("Largo").value;
ancho=document.getElementById("Ancho").value;
radio=document.getElementById("Radio").value;

resultado=((parseInt(largo)*2)+(parseInt(ancho)*2))*3 //4x2+5x+2=18 esto lo multiplicamos por tres PARA SACAR EL PERIMETRO ES LARGO MAS LARGO DA 54
 //lo multimplico por tres por quedicen que se debe alambrar con tres hilos de alambre
alert("La cantidad de almabre a comprar es: " +resultado);
}
function Circulo () 
{
resultado=(Math.PI*radio*radio)*3 //PI POR RADIO.
alert("La cantidad de almabre a comprar es: " +resultado);
}
function Materiales () 
var cemento;
var cal;
{
resultado=(parseInt(largo)*parseInt(ancho))*2
resultadoDos=(parseInt(largo)*parseInt(ancho))*3
alert("De cemento se necesitan: " +resultado," De cal se necesita: " +resultadoDos);

/*para calcular cuanto necesitamos de cemento. primero sacamos el area "axb" "largoxancho"
 despues lo multiplicamos por dos porque por metro cuadrado necesitamos una.*/
//
}
