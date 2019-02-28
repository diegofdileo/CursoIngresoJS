function mostrar()
{

	var contador;
	var respuesta;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var numero;

	contador =0;
	respuesta="si";
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadPositivos=0;
	
	while(respuesta!='no')
	{
		numero = prompt("ingrese su numero");
		numero = parseInt(numero);

		if(numero<0)
		{
			sumaNegativos=sumaNegativos+numero;

		}

		if(numero>0)
		{
			sumaPositivos=sumaPositivos+numero;
			// 2
			cantidadPositivos++;
			// 1

		}


		respuesta=prompt("Ingrese no para salir");
	}

	console.log("Sumanegativos: "+sumaNegativos);
	console.log("sumaPositivos: "+ sumaPositivos);
		
		




}//FIN DE LA FUNCIÓN