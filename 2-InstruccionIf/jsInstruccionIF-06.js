function mostrar()
{
    

    var edad;

    edad = txtIdEdad.value;
    edad = parseInt(edad);

    if(edad > 17)
    {
    	alert("usted es adulto");
    }
    if(edad > 12 && edad < 18)
    {
    	alert("usted es adolecente");
    }
    if(edad < 13)
    {
    	alert("usted es un niño");
    }




}//FIN DE LA FUNCIÓN

//txtIdEdad