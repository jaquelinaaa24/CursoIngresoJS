/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var aumento;
var resultado;
sueldo=document.getElementById("importe").value;
var aumento=(sueldo*0,10);// esto es equivalente a hacer (sueldo*1,1)
var resultado=(sueldo+aumento);



}
