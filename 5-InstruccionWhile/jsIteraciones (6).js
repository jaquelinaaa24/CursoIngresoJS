/*Al presionar el botón pedir 5 números e informar 
la suma acumulada y el promedio. */


/*function Mostrar()
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
document.getElementById("promedio").value=acumulador/5; */
}

function Mostrar()
{
    var numero=prompt("Imgrese numeros");
  var numero=prompt("Imgrese 5 numeros");
   var contador=0;
   var acumulador=0;

   /* la incializo para que valla tomando valores porque sino no va guardando nada
                    para validar UTILIZAMOS SIEMPRE EL WHILE 
                    SE PUEDE HACER:
                    EL PARSEINT SI NO ES NUMERO DA NAN ENTONCES:
                    WHILE(NUMERO==NAN) (ES UN TIPO DE NUMERO
                    el nan nunca va hacer iguama asi mismo por una paritcularidad del lenguaje
                    lo comparemos con lo que lo comparemos siempre va a dar false
                    una forma es con isNaN
                    ESTA ES UNA FORMA PARA HACER EL QUE USUARIO INGRESE UN NUMERO
                     while(isNaN(numero))
                     {
                      alert("Ingrese el dato correcto por favor");
                     }

                    {
                     
                    }*/
   while(isNaN(numero))
   {
    numero=prompt("Por favor ingrese numeros");

   }
    while(numero<5)
   {
    contador++;
    numero=prompt("Ingrese numero");
    numero=parseInt(numero);
    acumulador=acumulador+numero;
   }
  document.getElementById("suma").value=acumulador;
  document.getElementById("promedio").value=acumulador/5;       
 //alert(acumulador);
 // alert(acumulador/contador);


   }
