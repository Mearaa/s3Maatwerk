class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {

    this.music = this.sound.add("music");

    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: false,
      delay: 0,
    }
    this.music.play(musicConfig);

    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background"); // Moving
    this.background.setOrigin(0, 0); // Turning point

    //  change from image to sprite
    this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
    this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
    this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");

    this.enemies = this.physics.add.group();
    this.enemies.add(this.ship1);
    this.enemies.add(this.ship2);
    this.enemies.add(this.ship3);

    //  play the animations
    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");

    // make the ships clickable to destroy them
    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    // When ship is clicked it goes boom.
    this.input.on('gameobjectdown', this.destroyShip, this);

    var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1); // Add a shape with solid black
    graphics.beginPath();
    graphics.moveTo(0,0);
    graphics.lineTo(config.width, 0); // Draw the poligon lines with the coordinates
    graphics.lineTo(config.width, 20);
    graphics.lineTo(0,20);
    graphics.lineTo(0,0);
    graphics.closePath(); // Close the path
    graphics.fillPath(); // Fill the path

    this.score = 0;

    this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE " , 16); // Positie van de score met font size 16

    //this.beamSound = this.sound.add("audio_beam");
    this.explosionSound = this.sound.add("audio_explosion");
    this.pickupSound = this.sound.add("audio_pickup");

  //  this.add.text(20, 20, "Playing game", {
  //    font: "25px Arial",
  //    fill: "yellow"
//    });


    // The bag of power-ups.
    this.powerUps = this.physics.add.group();

    var maxObjects = 4;
    for (var i = 0; i <= maxObjects; i++){
      var powerUp = this.physics.add.sprite(16, 16, "power-up");
      this.powerUps.add(powerUp);
      powerUp.setRandomPosition(0, 0, game.config.width, game.config.height); // Puts the powerups at random

      if (Math.random() > 0.5){
        powerUp.play("red");
      } else {
        powerUp.play("gray");
      }

      // setVelocity
      powerUp.setVelocity(100,100);
      powerUp.setCollideWorldBounds(true);
      powerUp.setBounce(1);
      }
      // Add player
      this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "player");
      this.player.play("thrust");
      this.cursorKeys = this.input.keyboard.createCursorKeys();
      this.player.setCollideWorldBounds(true);

      // Add key

      this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.projectiles = this.add.group();

      // Collide with beam
      this.physics.add.collider(this.projectiles, this.powerUps, function(projectile, powerUp){
        projectile.destroy();
      });

      // Power Pick up.
      this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, null, this);

      //Enemy contact
      this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, null, this);

      //Beam to enemy contact
      this.physics.add.overlap(this.projectiles, this.enemies, this.hitEnemy, null, this);

    }

    pickPowerUp(player, powerUp) {
      // make it inactive and hide it
      powerUp.disableBody(true, true);
      this.pickupSound.play();
    }

    // 3.3 reset position of player and enemy when they crash each other
    hurtPlayer(player, enemy) {
      this.resetShipPos(enemy);
      if(this.player.alpha < 1){
        return;
      }

      var explosion = new Explosion(this, player.x, player.y);

      player.disableBody(true, true);
      this.time.addEvent({
        delay:1000,
        callback:this.resetPlayer,
        callbackScope: this,
        loop: false
      });
      //player.x = config.width / 2 - 8;
      //player.y = config.height - 64;
    }

    // 4.3 reset ship position when hit
    hitEnemy(projectile, enemy) {

      var explosion = new Explosion(this, enemy.x, enemy.y);
      projectile.destroy();
      this.resetShipPos(enemy);
      this.score += 15;
      var scoreFormated = this.zeroPad(this.score, 6)
      this.scoreLabel.text = "SCORE " + scoreFormated;

      this.explosionSound.play();
    }

// Moving ships
  update() {
  //  var randomSpeed = Phaser.Math.Between(0,1);

    this.moveShip(this.ship1, 1, 1);
    this.moveShip(this.ship2, 2, 2);
    this.moveShip(this.ship3, 3, 3);

    this.background.tilePositionY -= 0.5;

    this.movePlayerManager();

    if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
      if(this.player.active){
        this.shootBeam();
      }
    }

    for(var i = 0; i < this.projectiles.getChildren().length; i++){
      var beam = this.projectiles.getChildren()[i];
      beam.update();
    }

  }

  movePlayerManager(){

    if(this.cursorKeys.left.isDown){
      this.player.setVelocityX(-gameSettings.playerSpeed);
    }else if (this.cursorKeys.right.isDown){
      this.player.setVelocityX(gameSettings.playerSpeed);
    }

    if(this.cursorKeys.up.isDown){
      this.player.setVelocityY(-gameSettings.playerSpeed);
    }else if(this.cursorKeys.down.isDown){
      this.player.setVelocityY(gameSettings.playerSpeed);
    }
  }

  moveShip(ship, speed) {
    ship.y += speed;
    if (ship.y > config.height) {
      this.resetShipPos(ship);
    }
  }

  resetShipPos(ship){
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, config.width);
    ship.x = randomX;
  }

  // Boom function
  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explode");
  }

  shootBeam(){
    //var beam = this.physics.add.sprite(this.player.x, this.player.y, "beam");
    var beam = new Beam(this);
    //this.beamSound.play();
  }

  zeroPad(number, size){
    var stringNumber = String(number);
    while(stringNumber.length < (size || 2)){
      stringNumber = "0" + stringNumber;
    }
    return stringNumber;
  }

  resetPlayer(){
    var x = config.width / 2 - 8;
    var y = config.height + 64;
    this.player.enableBody(true, x, y, true, true);

    this.player.alpha = 0.5;

    var tween = this.tweens.add({
      targets: this.player,
      y: config.height - 64,
      ease: 'Power1',
      duration: 1500,
      repeat: 0,
      onComplete: function(){
        this.player.alpha = 1;
      },
      callbackScope: this
    });
    }
  }
