/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var importe;
var descuento;
var importeFinal;
importe=document.getElementById("importe").value;
var descuento=(importe*0.25);
var importeFinal=(importe-descuento);



}
