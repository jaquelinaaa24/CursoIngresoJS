/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
 id="PrecioUno">
id="PrecioDos">
 id="PrecioTres">
*/
var precioUno;
var precioDos;
var precioTres;
var resultado;
function Sumar () 
{

precioUno=document.getElementById("PrecioUno").value;
precioDos=document.getElementById("PrecioDos").value;
precioTres=document.getElementById("PrecioTres").value;

resultado=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);
alert("La suma de los productos es: " +resultado);
}

function Promedio () 
{
precioUno=document.getElementById("PrecioUno").value;
precioDos=document.getElementById("PrecioDos").value;
precioTres=document.getElementById("PrecioTres").value;

resultado=(parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres))/3;
alert("El promedio de los productos es: " +resultado);
}
function PrecioFinal () 
{
precioUno=document.getElementById("PrecioUno").value;
precioDos=document.getElementById("PrecioDos").value;
precioTres=document.getElementById("PrecioTres").value;

resultado=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres)*1.21
alert("El precio final es: "  +resultado);

}
