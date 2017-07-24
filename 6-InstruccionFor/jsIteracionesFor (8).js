/*al presionar el botón pedir un número.
 Informar si el numero es PRIMO o no.*/
//es primo cuando tiene solo dos divisores por si mismo y por uno , si tiene un tercer divisor no es primo
// */
function Mostrar()
{
var numero=prompt("Ingrese un numero");
var primo=true;

for(i=2 ; i<numero ; i++)
{
if(numero%i==0)
{
primo=false
break; //cuando entra una vez al if ya sabemos que no es primo; //utilizamos la bandera primo
}

}
if(!primo)
{
alert("Este numero no es primo");
}
else
{
alert("Es primo");
}
}



/*otra forma de hacerlo:

function Mostrar()
{
var numero=prompt();
var contador=0;

for(i=1 ; i<numero ; i++)
{
if(numero%i==0)
{
contador++;
}
}
if(contador>2)
{
alert();
}
else
{
alert("Es primo");*/
