/// CODE FOR COMMUNCATION WITH THE CLIENT
const server = require('http').createServer();
const io = require("socket.io")(server);
// Server listens for socket.io communication at port 8000
start = function () {
  io.on('connection', client => {
    console.log('connected');
    // If socket.io receives message from the client browser then 
    // this call back will be executed.
    client.on('message', function (msg) {
      console.log(msg);
    });
    // If a web browser disconnects from Socket.IO then this callback is called.
    client.on('disconnect', function () {
      console.log('disconnected');
    });
  });
  io.listen(8000);
  startJohnny();
}

// Initialize the board with Johnny Five code to open connection with Arduino
// The board's pins will not be accessible until
// the board has reported that it is ready

startJohnny = function () {
  var five = require("johnny-five"); // gets johnny-five
  var board = new five.Board(); // initates the Arduino board

  board.on("ready", function () {
    var joystick = new five.Joystick({ // Define var joystick
      pins: ["A0", "A1"],  // Define the pins the joystick shield is attached to. 
    });
    var button = new five.Button(3); // Define var button and define the pin attached to it, D3 in this case. 

    joystick.on("change", function () {
      var direction;
      // bepaalde richting aan de hand van x en y
      var x_position = this.x *1000; // The * 1000 is used so the numbers are easier to read. The numbers in Arduino IDE and JS are different in size, the *1000 is used to correct that. 
      var y_position = this.y * 1000;

      // This if else statement is used to give the different directions. It may require some tweaking for your board, the numbers from the Arduino IDE and JS vary. 
      if (x_position < -100 && y_position <10 ) {
        direction = "A";
      } else if (x_position > 650 && y_position < 10 ) {
        direction = "D";
      } else if (y_position > 600 &&  x_position < 100 ) {
        direction = "W"
      } else if (y_position < -50 &&  x_position < 350 ) {
        direction = "S";
      } else 
        direction = "Normal";
      
      io.sockets.emit('joystick', direction); // emits the message to the client.
      // console.log("Joystick");

    });

    // This one is a bit tricky, logically these two functions should be switched but upon testing it would work the opposite way. 
    // I do not know how this happened, most important is that it works. 

    button.on("down", function(){ 
      var attack;
        attack = "No" 
      io.sockets.emit('button', attack); // Passes the attack value to the client
    });
    
    button.on("up", function(){
      attack = "Q"; 
      io.sockets.emit('button', attack); // Passes the attack value to the client
      
    })
  });
}

start();