"use strict"

const USDTOUAH = 26;
const UAHTOUSD = 1/26;

function converter (moneyValue, curse) {
	return moneyValue * curse;
}

function minmax (array) {
	const min = Math.min(...array);
	const max = Math.max(...array);
	console.log("Min: " + min);
	console.log("Max: " + max);
	return {
		Min: min,
		Max: max
	}
}

function average (array) {
	if (array.length == 0)
		return 0;
	let sum =0;
	for (var i =0; i<array.length;i++) {
		sum += array[i];
	}
	return sum/array.length;
}
