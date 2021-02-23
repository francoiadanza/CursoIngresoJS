function mostrar()
{
	//tomo la edad  
	var edad;
	var stadoCivil;


	edad = txtIdEdad.value;
	edad = parseInt(edad);

	stadoCivil = estadoCivil.value;






	if(edad < 18 && stadoCivil != "Soltero")
	{

	}else if(edad > 17 && stadoCivil == "Soltero" )
	{
      alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN
//txtIdEdad