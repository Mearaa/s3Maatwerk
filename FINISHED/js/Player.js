export default class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data) { //A constructor is just the initialization function that gets called when you use the ‘new’ keyword to instantiate an object.
    var {
      scene,
      x,
      y,
      texture,
      frame
    } = data;
    super(scene.matter.world, x, y, texture, frame); //method that is used to call an object's parent.
    this.scene.add.existing(this);

    /////////////////// WEAPON ///////////////////
    this.spriteWeapon = new Phaser.GameObjects.Sprite(this.scene, 0, 0, 'weapons', 36); // Gets number 36 in the spritesheet. If you require a different weapon you have to count the sprites starting from left to right. 
    this.spriteWeapon.setScale(0.7); // Resizes the sprite, in this case smaller.
    this.spriteWeapon.setOrigin(0.25, 0.75); // Sets the weapon just a bit off center so it doesn't appear to be in the middle of the player but rather in the hands of the player
    this.scene.add.existing(this.spriteWeapon);


    const {
      Body,
      Bodies
    } = Phaser.Physics.Matter.Matter;
    var playerCollider = Bodies.circle(this.x, this.y, 12, { // Gets the collider around the player
      isSensor: false,
      label: 'playerCollider'
    });
    //Sensors trigger collision events, but don't react with colliding body physically.
    var playerSensor = Bodies.circle(this.x, this.y, 24, { // Gets the sensor around the player
      isSensor: true,
      label: 'playerSensor'
    });

    const compoundBody = Body.create({
      parts: [playerCollider, playerSensor],
      setFrictionAir: 0.35
    }); //Sets a new air resistance for this Game Object's Matter Body
    this.setScale(0.8); // Resize player, in this case smaller. 
    this.setExistingBody(compoundBody);
    this.setFixedRotation(); // Player doesn't rotate when collides

  }

  static preload(scene) {
    // gets the spritesheet for the player and for the weapon.
    scene.load.atlas('mijke', 'assets/images/mijke.png', 'assets/images/mijke_atlas.json');
    scene.load.animation('mijke_anim', 'assets/images/mijke_anim.json');
    scene.load.spritesheet('weapons', 'assets/images/weapons.png', {
      frameWidth: 32,
      frameHeight: 32
    });
  }

  get velocity() { //Gets velocity for animation
    return this.body.velocity;
  }

  /////////////////// PLAYER SPEED ///////////////////

  update() {
    const speed = 2.5; // Speed of the player
    var playerVelocity = new Phaser.Math.Vector2();
    
    if (this.inputKeys.left.isDown || direction == "A") { // This uses the earlier defined keys in MainScene for movement. The direction is declared in the controller-server and controller-client for the Arduino movement. 
      playerVelocity.x = -1 // Moves player to the left
      this.setFlipX(-1); // Rotates the character into the direction for immersive gameplay
      this.setFixedRotation();
    } else if (this.inputKeys.right.isDown || direction == "D") {
      playerVelocity.x = 1; // Moves player to the right
      this.setFlipX(0); // Rotates the character back to original form. 
    }

    if (this.inputKeys.up.isDown || direction == "W") {
      playerVelocity.y = -1 // Moves player Up
    } else if (this.inputKeys.down.isDown || direction == "S") {
      playerVelocity.y = 1; // Moves player down
    }

    playerVelocity.normalize(); // Makes sure diagonal speed is set the same as right and left
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);

    /////////////////// SET ANIMATION ///////////////////

    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) { //Set animation
      this.anims.play('mijke_walk', true); // If the player moves this animation is played
    } else {
      this.anims.play('mijke_idle', true); // If the player doesn't move this animation is played
    }

    this.spriteWeapon.setPosition(this.x, this.y) // Sets position of the weapon
    this.weaponRotate(); // Calls the weapon rotate function

  }

  weaponRotate() {
    if (this.inputKeys.attack.isDown || swing == true) { // Uses earlier defined keys in MainScene to trigger the attack/swing. The swing is defined in controller-client.js and gets called when the Arduino controller button is pressed.
      this.weaponRotation += 6; // Rotates the weapon to make it look like its swinging
    } else if (swing == false) { // Weapon doesn't move
      this.weaponRotation = 0; // Weapon doesn't move
    }
    if (this.weaponRotation > 130) { // Makes sure the weapon doesn't keep going round and round. This makes it stop at 130 and snap back to its original state. 
      this.weaponRotation = 0;
    }

    if (this.flipX) {
      this.spriteWeapon.setAngle(-this.weaponRotation - 90); // If the player is flipped, so will the weapon
    } else {
      this.spriteWeapon.setAngle(this.weaponRotation);
    }
  }

}