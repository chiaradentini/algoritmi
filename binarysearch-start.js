/**
	* Scrivere una funzione che ricerchi la prima occorrenza di un determinato
	* numero in una serie di numeri ordinati e restituisca un valore booleano
	* true se presente, false altrimenti. Mostrare il risultato in console.
	*
	* La ricerca deve implementare l'algoritmo di ricerca binaria.
	* Esempio -> https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/01125313/image-2.png
	*/
function binarySearch(arr, el) {
	let left = 0
	let right = arr.length - 1
	while (left <= right) {
		let mid = ((right + left) / 2)
		if (arr[mid] === el) {
			return mid
		} else if (el < arr[mid]) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return -1
}

function popolateArray(maxNum) {
	var numberArray = []
	for (let index = 0; index < maxNUm.length; index++) {
		numberArray.push(i)
	}
	return numberArray
}

binarySearch(popolateArray(100), 44)