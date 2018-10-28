"use strict";

function haha (num) {
	
	if (num == 1 ) {
		console.log(1);
		return 1;
	}

	
	console.log(num);
	haha(num-1);
}
