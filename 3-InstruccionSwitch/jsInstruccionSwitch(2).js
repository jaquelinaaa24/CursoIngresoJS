/*al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function Mostrar()
{

var mes = document.getElementById('mes').value;

switch(mes)
{
case "Julio": 
case "Agosto":
{
 alert("Abrigate que hace frio");

}
break

case"Enero":
case"Febrero":
case"Marzo":
case"Abril":
case"Mayo":
case"Junio":

{
 alert("Falta para el invierno");
}
break;

default:

 alert("Ya pasamos el frio, ahora calor!!!." ); 
}
}

/*al seleccionar un mes informar. 
si estamos en Invierno: "Abrigate que hace frio." 
si aún no llego el Invierno: "Falta para el invierno." 
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */


function Mostrar()
{

var mes = document.getElementById('mes').value;

if(mes=="Julio" || mes=="Agosto")
{
 alert("Abrigate que hace frio");
}

else if(mes=="Enero" || mes=="Febrero" || mes=="Marzo" || mes=="Abril" || mes=="Mayo" || mes=="Junio")
{
 alert("Falta para el invierno");
}

else 
{
  alert("Ya pasamos el frio, ahora calor!!!");  
}
 
*/
