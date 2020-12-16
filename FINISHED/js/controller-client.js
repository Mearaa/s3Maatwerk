var direction = '';
var attack = '';
var swing = false; // This sets the value of swing to false automatically so it doesn't start swinging at the start. 

$(document).ready(function () {

	var socket = io.connect('http://localhost:8000');
	socket.on('connect', function () {

		socket.on('joystick', function (msg) {
			if (msg != "Normal") { // If the message does not equal normal the var direction gets the value of the message sent by the joystick. In this case W, A, S or D
				direction = msg;
			} else {
				direction = ''; // This makes sure that if the msg is normal the player will stand still rather than keep on moving in said direction
			}
		});

		socket.on('button', function (msg) {
			if (msg == "Q") { // if the message from the controller-server and thus the arduino equals Q then it passes the value to swing as true. Swing is used in Player.js for the weaponrotation. 
				swing = true;
			} else if (msg == "No") { // if the message is no the weapon will stop swinging. 
				swing = false;
			}
		});
	});
});