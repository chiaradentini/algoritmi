/**
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/

function isAnagram(stringa1, stringa2) {
	if (stringa1.length !== stringa2.length) {
		console.log(stringa1, stringa2);
		return false;
	} else {
		stringa1 = stringa1.split("").sort().join("");
		stringa2 = stringa2.split("").sort().join("");
		return stringa1 === stringa2 ? true : false;
	}
}

console.log(isAnagram("nacho", "nocha"));
