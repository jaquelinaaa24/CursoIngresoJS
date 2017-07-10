/*Al presionar el botón pedir números 
hasta que el usuario quiera, mostrar el número máximo y el número mínimo.*/


function Mostrar()
{
 var respuesta="si";
 var max;
 var min;
 var numero;
 var primera=true;
	
	while(respuesta)
	{
	numero=prompt("Ingrese numeros correctos");
	numero=parseInt(numero);
	 respuesta=confirm();

    if(primera)
	{
    max=numero;
	min=numero;
	primera=false;

	}
	 else
	{
	 if(numero<min)
	 {
	 min=numero;
     }
	 if(numero>max)
	 {
     max=numero;
	 }


}
document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;
	}
}
/*LA BANDERA ES UNA VARIABLE QUE SIRVE PARA SAER CUANDO ES LA PRIMERA VEZ DE ALGO. esta formula se utiliza cuando no tenemos los datos de los maximos y minimos si tenemos
ejemplo dos notas si. el maximo y minimo cuado empieza este problema no tienen valores
entonces como no podemos hacer eso tenemos que hacer que la priemra vez que entren esos valores tomen valoresy lo hacemos con una bander aque la creamos en true si primera es true 
tnonces es el primer numero que entra va hacer maximo o minimo y se lo asigno a maximo y minimo*/
