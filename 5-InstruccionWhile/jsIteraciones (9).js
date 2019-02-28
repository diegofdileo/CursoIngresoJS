function mostrar()
{

	var contador;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var bandera;

	// declarar variables
	contador =0;
	respuesta="si";
	//numeroMaximo=-9999;
	//numeroMinimo=9999;
	bandera="es la primera";
	while(respuesta!='no')
	{
		
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado= parseInt(numeroIngresado);

		if(bandera == "es la primera")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			bandera="lalala";

		}else
		{
			if(numeroMaximo<numeroIngresado)
			{
			numeroMaximo=numeroIngresado;
			}

			if(numeroMinimo>numeroIngresado)
			{
			numeroMinimo=numeroIngresado;
			}

		}
			



		respuesta=prompt("ingrese no para salir");

	}

	console.log("el maximo es"+numeroMaximo);
	console.log("el minimo es"+numeroMinimo);




}//FIN DE LA FUNCIÓN