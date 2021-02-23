function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota;

	nota = Math.round(Math.random() * 10);

	console.log(nota);

	if(nota > 8 && nota < 11 )
	{
		alert("excelente");
	}else if(nota > 4 && nota < 9)
	{
		alert("aprobó");
	}else if (nota < 5)
	{
		alert("vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN