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
}

function average (array) {
	var sum =0;
	for (var i =0; i<array.length;i++) {
		sum += array[i];
	}
	return sum/array.length;
}

