/*Al ingresar una edad debemos informar 
si la persona es mayor de edad*/ 

function Mostrar()
{
   var edad;
   edad=parseInt(document.getElementById("edad").value);

   if(edad>=18)
   {
   alert("La persona es mayor de edad");
   }

}
