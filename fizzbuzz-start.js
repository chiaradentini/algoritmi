/**
	* Scrivere una funzione che mostri in console una serie di numeri da 1 a 100.
	* Per ogni multiplo di 3 dovrà mostrare "Fizz", mentre per ogni multiplo di 5
	* dovrà mostrare "Buzz". Nel caso il numero sia multiplo di entrambi dovrà
	* mostrare "FizzBuzz".
	*/
function FizzBuzz(valoreMassimo) {
	for (var i = 1; i < valoreMassimo; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log(i, "FizzBuzz");
		} else if (i % 3 == 0) {
			console.log(i, "Fizz");
		} else if (1 % 5 == 0) {
			console.log(i, "Buzz");
		} else {
			console.log(i);
		}
	}
}
FizzBuzz(100);