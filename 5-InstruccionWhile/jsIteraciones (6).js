/*Al presionar el botón pedir 5 números e informar 
la suma acumulada y el promedio. */


function Mostrar()
{
    var numero;
	var contador=0;
	var acumulador=0;
    var i=0
while(contador<5)
{
 numero=parseInt(prompt("Por favor ingrese 5 numeros"));
acumulador= acumulador +numero;
 i= i+1;
}
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/5;
}
