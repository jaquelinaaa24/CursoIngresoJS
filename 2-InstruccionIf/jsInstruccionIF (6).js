/*Al ingresar una edad debemos informar si
 la persona es mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o niño 
(menor a 13 años).*/


function Mostrar()
{
  var edad;
  edad=document.getElementById("edad").value;
  
  if(edad>=18)
  {
  alert("La persona es mayor de edad");
  }
  else
  {
  if(edad>=13)
  {
  alert("La persona es adolescente");
    }
    else
    {
        alert("La persona es niño");
    }
  }
 
}
