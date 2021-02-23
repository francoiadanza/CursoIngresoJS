/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var importeDescuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe);


	descuento = importe * 0.25;

	importeDescuento = importe - descuento;

	txtIdResultado.value = importeDescuento;
	


}
//txtIdImporte
//txtIdResultado
