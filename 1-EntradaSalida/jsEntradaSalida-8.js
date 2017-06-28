/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()

{
var dividendo
var dividendo=document.getElementById("dividendo");
var divisor;
var divisor=document.getElementById("divisor");
var resto;
resto=(parseInt (dividendo) % parseInt (divisor));
alert("El resto es: " +resto); } //ME DA "NAN"

