/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()

{
var numero1;
var numero2;
var resultado;
numero1=document.getElementById("numeroUno").value;
numero2=document.getElementById("numeroDos").value;
resultado=(parseInt(numero1) + parseInt(numero2));
alert("El resultado de la suma de los numeros que usted ingreso es: " +resultado);
}
