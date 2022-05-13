/**
	* Data una stringa, restituisci il carattere che viene ripetuto più volte.
	* Esempio
	* maxChar("abccccccd") => "c"
	* maxChar("apple 12311111") => "1"
	*/
function rep(str) {

	let count = 0; //contatore che si aggiorna con il numero massimo di ripetizioni
	let string;

	for (let i = 0; i < str.length; i++) {
		const elem = str[i];
		let tmp = 0; //contatore temporaneo della lettera ripetuta

		for (let j = 0; j < str.length; j++) {
			const elem2 = str[j];

			if (elem === elem2) {
				tmp += 1; // aggiungo 1 ogni volta che trovo un doppione
			}
		}
		if (tmp > count) { // se il contatore temporaneo é maggiore di count 
			count = tmp; //allora count si aggiorna 
			string = elem;//string diventa la lettera piú ripetuta
		}
	}
	console.log('la lettera ', string, 'é  contenuta ', count, ' volte');
}

rep('gggtdehj');