"use strict"

function jail () {
	let line ="";
	for(var i=0; i < 8; i++){
		line +="#";
		console.log(line);
	}
}

function jailreverse() {
	let line = "########";
	for (var i = 8; i>0; i--){
		
		console.log(line.substring(0,i));
	}
}
