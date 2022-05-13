/**
	* Dato un numero intero restituire il numero inverso
	* Esempio
	* reverseInt(15) => 51
	* reverseInt(981) => 189
	* reverseInt(-90) => -9
	* reverseInt(-15) => -51
	*/
function numeroInevrso(val) {

	return (parseInt(val
		.toString() //converto in stringa 
		.split("") // divido
		.reverse() // inverto l'ordine
		.join("")) // riunisco
		* Math.sign(val)) //riconverto 
}

console.log(numeroInevrso(-90)); 