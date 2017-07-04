/*al seleccionar un mes informar. 
si es Febrero: " Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días"*/


function Mostrar()
{
var mes = document.getElementById('mes').value;

switch(mes)
{
case"Febrero":
{
alert("Este mes no tiene más de 29 días.");
}
break;
default:

alert("Este mes tiene 30 o más días");

break;
}
}

AHORA CON IF:

function Mostrar()
{
var mes;
mes=document.getElementById("mes").value;

if(mes=="Febrero")
{
 alert("Este mes no tiene mas de 29 dias");
}
else
{
 alert("Este mes tiene 30 o mas dias");
}

}
