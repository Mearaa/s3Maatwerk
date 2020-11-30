/// CODE FOR COMMUNCATION WITH THE CLIENT
export default class Server {
  const server = require('http').createServer();
  const io = require('socket.io')(server);
  // Server listens for socket.io communication at port 8000

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
io.listen(3307);


/// CODE FOR COMMUNICATION WITH THE HCSR04 INPUT ON ARDUINO

// Initialize the board with Johnny Five code to open connection with Arduino



// The board's pins will not be accessible until
// the board has reported that it is ready







var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
  var joystick = new five.Joystick({
    pins: ["A0", "A1"],
    invertY: true
  });

  joystick.on("change", function () {
    var direction;
    // bepaalde richting aan de hand van x en y
    var x_position = this.x;
    var y_position = this.y;

    if (x_position > 630 && 400 < y_position < 800) {
      direction = "D";
    } else if (x_position < 45 && 200 < y_position < 600) {
      direction = "A";
    } else if (y_position > 630 && 200 < x_position < 600) {
      direction = "W"
    } else if (y_position < 45 && 300 < x_position < 800) {
      direction = "S";
    } else {
      direction = "normal";
    }

    io.sockets.emit('joystick', direction);
    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);
    console.log(direction);
  });
}); 
}