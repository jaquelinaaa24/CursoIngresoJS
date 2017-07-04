/*al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días.*/



function Mostrar()
{

var mes = document.getElementById('mes').value;

switch(mes)
{

 case"Enero":
 case"Marzo":
 case"Mayo":
 case"Julio":
 case"Agosto":
 case"Octubre":
 case"Diciembre":
{
  alert("Este mes tiene 31 dias");
}
 break;

 case"Noviembre":
 case"Abril":
 case"Junio":
 case"Septiembre":
 {
  alert("Este mes tiene 30 dias");
}
 break;
 default:
 {
 alert("Este mes tiene 28 dias");
 }
}
}
AHORA CON IF

function Mostrar()
{
  var mes;
  mes=document.getElementById("mes").value;
  
  if(mes=="Enero" || mes=="Octubre" || mes=="Marzo" || mes=="Mayo" || mes=="Julio" || mes=="Agosto" || mes=="Septiembre" || mes=="Agosto" || mes=="Diciembre")
  {
    alert("Este mes tiene 31 dias");
  }

  else
  {
   if(mes=="Noviembre" || mes=="Junio" || mes=="Septiembre" || mes=="Abril")
  {
    alert("Este mes tiene 30 dias");
  }
  else
  {
   alert("Este mes tiene 28 dias");
  }
  }
}






