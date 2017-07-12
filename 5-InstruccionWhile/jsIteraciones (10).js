/*Al presionar el botón pedir números hasta que
el usuario quiera, mostar:
1-Suma de los negativos. 2-Suma de los positivos.
3-Cantidad de positivos. 4-Cantidad de negativos.
5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function Mostrar()
{ 
    var numero;
	var positivo=0;
	var negativo=0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorDeCeros= 0;
	var contadorNumerosPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	var respuesta  = true;

	while(respuesta){
		
		numero = prompt('ingrese un numero');
		numero = parseInt(numero);
		// valido que ingrese solo numeros
		while(isNaN(numero)){
			numero = prompt('Ingrese Solo Numeros');
			numero = parseInt(numero);
		}
		if(numero>=0)
		{
			positivo = positivo + numero;
			contadorPositivos = contadorPositivos +1;
		}
		else
			{
			negativo = negativo + numero;
			contadorNegativos = contadorNegativos +1;
		    }
		if(numero==0)
		{
		 contadorDeCeros= contadorDeCeros +1;
		}

		else if(numero%2==0)
		{
		contadorNumerosPares=contadorNumerosPares+1;
	    }
		
		respuesta = confirm('Seguir Ingresando ? ') ;
	}
	promedioPositivos=positivo/contadorPositivos;
	promedioNegativos=negativo/contadorNegativos;
	diferenciaPositivosNegativos=(parseInt(positivo) + parseInt(negativo));

	
	/*pro_pos = sum_pos / c_pos;
	pro_neg = sum_neg / c_neg;

	dif_pos_neg = sum_pos + sum_neg;*/

	document.write("La suma de los numeros positivos es: "+positivo ,"<br/>");
	document.write("La suma de los numeros negativos es: " +negativo ,"<br/>") ;
    document.write("Cantidad de numeros positivos ingresados:  "+contadorPositivos+ "<br/>");
	document.write("Cantidad de numeros negstivos ingresados: "+contadorNegativos,"<br/>");
    document.write("Cantidad de ceros: "+contadorDeCeros,"<br/>");
	document.write("Cantidad de numeros Pares: "+contadorNumerosPares,"<br/>");
	document.write("Promedio de numeros Positivos : "+promedioPositivos,"<br/>");
	document.write("La diferencia de positivos y negativos es: "+diferenciaPositivosNegativos,"<br/>");

}
