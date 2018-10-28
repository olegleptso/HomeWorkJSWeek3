"use strict"

function usdToUah (usd) {
	var r;
	r = usd*26;
	return r;
}

function uahToUsd (uah) {
	var r;
	r = uah/26;
	return r;
}

function minmax (array) {
	var min = Math.min(...array);
	var max = Math.max(...array);
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
	var sum =0;
	for (var i =0; i<array.length;i++) {
		sum += array[i];
	}
	return sum/array.length;
}
var amx = [3,5,1,-2,3];
minmax(amx);