function mostrar()
{
	//tomo la edad  
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad < 18 && edad > 12)
	{
		alert("usted es adolescente");
	}


}


//txtIdEdad