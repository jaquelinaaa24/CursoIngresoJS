
/*Al presionar el botón pedir números hasta que 
el usuario quiera e informar la suma acumulada y el promedio.*/



function Mostrar()
{
    var numero=0;
	var contador=0;
	var acumulador=0
	var respuesta=true;

  
    
    while(respuesta==true) 
   {
	
	contador++;
	numero=prompt("Ingrese numero CORRECTO");
    numero=parseInt(numero);
    acumulador=acumulador+contador;
	respuesta=confirm();
    
	
   }
   
      
      alert(acumulador);
      alert(acumulador/contador);
   }

