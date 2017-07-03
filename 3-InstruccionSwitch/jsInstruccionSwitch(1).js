/*al seleccionar un mes informar. 
si es Enero: "que comiences bien el año!!!." 
si es Marzo: "a clases!!!." 
si es Julio: "se vienen las vacaciones!!!." 
si es Diciembre: "Felices fiesta!!!."*/



function Mostrar()
{
  
var mes= document.getElementById('mes').value;

switch(mes)
{
 case "Enero":
 {
    alert("Que comiences bien el año");
 }
 break;
 case "Marzo":
 {
     alert("A clases");
 }
break;
case "Julio":
 {

     alert("Se vienen las vacaciones");
 }
break;

case "Diciembre":
 {
     alert("Felices fiestas");
 }
break;
 
}
}





/* HECHA CON IF  al seleccionar un mes informar. 
si es Enero: "que comiences bien el año!!!." 
si es Marzo: "a clases!!!." 
si es Julio: "se vienen las vacaciones!!!." 
si es Diciembre: "Felices fiesta!!!." */

function Mostrar()
{
  
var mes= document.getElementById('mes').value;

if(mes=="Enero")
{
 alert("que comiences bien el año!!!.");
}
else if(mes=="Marzo")
{
 alert("a clases!!!!!");
}
else if(mes=="Julio")
{
alert("Se vienen vacaciones");
}
else if (mes=="Diciembre")
{
 alert("Felices Fiestas!!") ;  
}
else 
{
    alert(" ");
}
}
*/
