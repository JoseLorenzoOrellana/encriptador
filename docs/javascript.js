function encriptar() {
	let textoEntrada = document.getElementById('entrada').value.toLowerCase();

	let textoSalida = textoEntrada.replace(/e/img, "enter");
	 textoSalida = textoSalida.replace(/i/img, "imes");
	 textoSalida = textoSalida.replace(/a/img, "ai");
	 textoSalida = textoSalida.replace(/o/img, "ober");
	 textoSalida = textoSalida.replace(/u/img, "ufat");

	document.getElementById("salida").innerHTML = textoSalida;
} 

function desencriptar() {
	let textoEntrada = document.getElementById('entrada').value.toLowerCase();

	let textoSalida = textoEntrada.replace(/enter/img, "e");
	 textoSalida = textoSalida.replace(/imes/img, "i");
	 textoSalida = textoSalida.replace(/ai/img, "a");
	 textoSalida = textoSalida.replace(/ober/img, "o");
	 textoSalida = textoSalida.replace(/ufat/img, "u");

	document.getElementById("salida").innerHTML = textoSalida;
} 
 
 function copiar() {
var content = document.getElementById('salida');

content.select();
document.execCommand('copy');

}
	