$(document).ready(function(){


    var socket = io('http://localhost:8000');
	socket.on('connect', function () { 
		// socket.on('button', fucntion(msg)) De Q knop

		socket.on('joystick', function (msg) {

			// msg bevat de richting van de joystick. Afhankelijk van bericht moet de juiste knop ingedrukt worden.



		});
	});
});