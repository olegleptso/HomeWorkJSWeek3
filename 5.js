"use strict"

function fib(n) {
	var a=0;
	var b=1;
	var c=a+b;
	for(var i =0; i<n-2;i++){
		a=b;
		b=c;
		c=a+b;
   }
	return c;
}