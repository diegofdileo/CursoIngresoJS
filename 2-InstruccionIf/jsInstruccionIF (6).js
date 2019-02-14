function mostrar()
{
//tomo la edad  
var suEdad;

suEdad = document.getElementById('edad').value;

if (suEdad < 13) {

	alert("es niño");


} else {

	if (suEdad > 17) {

		alert("es adulto");
	} else {

		alert("es adolescente");
	}
}




}//FIN DE LA FUNCIÓN