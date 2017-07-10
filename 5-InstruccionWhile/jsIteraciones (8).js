/*Al presionar el botón pedir números hasta que el
 usuario quiera, sumar los que son positivos y multiplicar los negativos.*/



function Mostrar()
{
   var numero=0;
   var acumulador=0;
   var contador=0; //el nuetro de la multiplicacion es 1 en la suma es 0
   var respuesta=true;
   var acumuladorSuma;
   var acumuladorMultiplicacion;

   while(respuesta)
   {
	contador++
	numero=prompt("Ingrese numero correcto: ");
	numero=parseInt(numero);
	acumulador=acumulador+contador;

	respuesta=confirm();

	if(numero>=0)
	{
	acumuladorSuma=acumulador+numero;
	} 
	else
	{
  acumuladorMultipliacion=acumulador*numero;
	}
    
   }
   
document.getElementById('suma').value=acumuladorSuma;
document.getElementById('producto').value=acumuladorMultiplicacion;
}
