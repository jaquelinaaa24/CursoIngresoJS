/*Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 
 'Es muy pequeño para NO ser soltero.'*/

function Mostrar()
{
 var edad;
 var estadoCivil;
 
 edad=document.getElementById("edad").value;
 estadoCivil=document.getElementById("estadoCivil").value;

  if(edad<18 || estadoCivil!=soltero); //no tendria que ser un &&

   {
   alert("es muy pequeño para NO ser soltero");
   }


 }
