/*Al ingresar una edad solo 
debemos informar si la persona NO es adolescente.*/

function Mostrar()
{
    var edad;
    edad=document.getElementById("edad").value;

    if(edad>=18 || edad<13)
    {
    alert("La persona NO es adolescente");
    }
}
