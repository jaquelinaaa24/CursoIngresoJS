/*Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.".*/


function Mostrar()
{

var laHora = document.getElementById('hora').value;

switch(laHora)
{
case "7": //tiene que ser del mismo tipo que el (laHora)
case "8":
case "9":
case "10":
case "11":
{
    alert("Es de mañana");
}
 break;



}
	
}
CON IF:
{
var hora
hora=document.getElementById("hora").value;

if(hora=="07" || hora=="08" || hora=="09" || hora=="10" || hora=="11")
{
alert("Es de mañana");
}
else
{
alert("Ingresar hora correcta");}
}
