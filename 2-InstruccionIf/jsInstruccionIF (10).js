function Mostrar()
{
	/*Al presionar el Botón, asignar una nota
 RANDOM al examen y mostar: "EXCELENTE"
  para notas igual a 9 o 10, 
"APROBÓ" para notas mayores a 4, "Vamos,
 la proxima se puede" para notas menores a 4*/

function Mostrar()
{
var nota;
nota=parseInt((Math.random()*(10-1))+1);


if(nota>=9)	
{
	alert("EXCELENTE: " +nota);
}
else 
{
 if(nota>=4)
 {
 alert("APROBO: " +nota);
 }
 else
  {
  alert("VAMOS LA PROXIMA SE PUEDE: " +nota);
  }

}
}
