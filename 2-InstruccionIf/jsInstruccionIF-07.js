function mostrar()
{
     var edad;
     var stadoCivil;

     edad = txtIdEdad.value;

     edad = parseInt(edad);

     stadoCivil = estadoCivil.value;

     if(edad < 18 && stadoCivil != "Soltero" )
     {
     	alert("usted es muy chico para no ser soltero");
     }






}//FIN DE LA FUNCIÓN
//txtIdEdad
//estadoCivil