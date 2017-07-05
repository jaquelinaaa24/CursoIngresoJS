/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroS;
var contador=0;
var numeroUsuario;
function comenzar()
{
numeroS=Math.floor(Math.random()*(101-1)+1);

console.log(numeroS);
}

function verificar()
{

contador=contador++;

numeroUsuario=document.getElementById("numero").value;

if(numeroS==numeroUsuario)
{
 alert("Usted es ganador , gano en : " +contador + " intentos");
 contador=0;
 }
else
{
  if(numeroUsuario<numeroS)
  {
  alert("Falta" +contador);
  }
  else
  {
  alert("Se paso" +contador);
  }
}

}
