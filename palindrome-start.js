/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/
function parolaPalind(val) {

	return val.split("")
		.reverse()
		.join("");
	// divido i caratteri, li inverto e li riunisco
}
let parola = "ala"; //inserisco parola da controllare
let res = parolaPalind(parola);
if (parola == res) {
	console.log('la parola é palindroma');
} else {
	console.log('ritenta');
}
// valuto se sono uguali