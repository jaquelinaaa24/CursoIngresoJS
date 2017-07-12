/*Al presionar el botón pedir números hasta que
el usuario quiera, mostar:
1-Suma de los negativos. 2-Suma de los positivos.
3-Cantidad de positivos. 4-Cantidad de negativos.
5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function Mostrar()
{ 
    var numero; //no se iniciliza porque guardamos datos
	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorDeCeros= 0;
	var contadorNumerosPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var respuesta  = true;

	while(respuesta){ //se usa para confirmar algo le pongo un valor tenemos que asegurarnos de que la primera vez ingrese por eso la inicialiamos en true. 
		
		numero = prompt('ingrese un numero');
		numero = parseInt(numero);
		// valido que ingrese solo numeros
		while(isNaN(numero)){
			numero = prompt('Ingrese Solo Numeros');
			numero = parseInt(numero);
		}
		if(numero>0)
		{
			acumuladorPositivo = acumuladorPositivo + numero;
			contadorPositivos = contadorPositivos+1;
		}
		 else if(numero<0)
			{
			acumuladorNegativo = acumuladorNegativo + numero;
			contadorNegativos = contadorNegativos +1;
		    }
		 else
		{
		 contadorDeCeros= contadorDeCeros +1;
		}

	    if(numero%2==0)
		{
		contadorNumerosPares=contadorNumerosPares+1;
	    }
		
		respuesta = confirm('Seguir Ingresando ? ') ;
	}
	promedioPositivos=acumuladorPositivo/contadorPositivos;
	promedioNegativos=acumuladorNegativo/contadorNegativos;
	diferenciaPositivosNegativos=(parseInt(contadorPositivos) - parseInt(contadorNegativos));
	
	if(diferenciaPositivosNegativos<0)
	{
	diferenciaPositivosNegativos=diferenciaPositivosNegativos*1;
	}

	document.write("La suma de los numeros positivos es: "+acumuladorPositivo ,"<br/>");
	document.write("La suma de los numeros negativos es: " +acumuladorNegativo ,"<br/>") ;
    document.write("Cantidad de numeros positivos ingresados:  "+contadorPositivos ,"<br/>");
	document.write("Cantidad de numeros negativos ingresados: "+contadorNegativos,"<br/>");
    document.write("Cantidad de ceros: "+contadorDeCeros,"<br/>");
	document.write("Cantidad de numeros Pares: "+contadorNumerosPares,"<br/>");
	document.write("Promedio de numeros Positivos : "+promedioPositivos,"<br/>");
	document.write("La diferencia de positivos y negativos es: "+diferenciaPositivosNegativos,"<br/>");

}

