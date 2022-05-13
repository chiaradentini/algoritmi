/**
	* Data una stringa, restituire una stringa con i caratteri in ordine inverso.
	* Esempio:
	* reverse("ciao") => "oaic"
	*/

function parolaInevrsa(val) {

	return val.split("")
		.reverse()
		.join("");
	// divido i caratteri, li inverto e li riunisco
}

console.log(parolaInevrsa("chiara"));