/*al presionar el botón repetir el pedido 
de número hasta que ingresemos el 9.*/

function Mostrar()
{
var clave;
clave=prompt("Ingrese la clase");
for(; clave!=9 ;)
{
 
 clave=prompt("Por favor ingrese el numero correcto");   
}
alert("Felicidades a ingresado el numero correcto");
}
