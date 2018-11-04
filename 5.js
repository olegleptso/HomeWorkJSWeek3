"use strict"

function fib(n) {
	let a=0;
	let b=1;
	let c=a+b;
	for(var i =0; i<n-2;i++){
		a=b;
		b=c;
		c=a+b;
   }
	return c;
}