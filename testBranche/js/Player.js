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
    this.spriteWeapon = new Phaser.GameObjects.Sprite(this.scene, 0, 0, 'weapons', 36);
    this.spriteWeapon.setScale(0.7);
    this.spriteWeapon.setOrigin(0.25, 0.75);
    this.scene.add.existing(this.spriteWeapon);

    //Sensors trigger collision events, but don't react with colliding body physically.
    const {
      Body,
      Bodies
    } = Phaser.Physics.Matter.Matter;
    var playerCollider = Bodies.circle(this.x, this.y, 12, {
      isSensor: false,
      label: 'playerCollider'
    });
    var playerSensor = Bodies.circle(this.x, this.y, 24, {
      isSensor: true,
      label: 'playerSensor'
    });

    const compoundBody = Body.create({
      parts: [playerCollider, playerSensor],
      setFrictionAir: 0.35
    }); //Sets a new air resistance for this Game Object's Matter Body
    this.setScale(0.8);
    this.setExistingBody(compoundBody);
    this.setFixedRotation(); // Player doesn't rotate when collides

  }

  static preload(scene) { //Static methods aren't called on instances of the class. Instead, they're called on the class itself.
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
    const speed = 2.5;
    var playerVelocity = new Phaser.Math.Vector2();
    if (this.inputKeys.left.isDown || direction == "A") { //Movement
      playerVelocity.x = -1
      this.setFlipX(-1);
      this.setFixedRotation();

      //this.player.setScale(1, 1);
      //  this.body.setScale = -1;
    } else if (this.inputKeys.right.isDown) {
      playerVelocity.x = 1;
      this.setFlipX(0);
      this.setFixedRotation();
      //this.player.setScale(1, 1);
    }
    if (this.inputKeys.up.isDown) {
      playerVelocity.y = -1
    } else if (this.inputKeys.down.isDown) {
      playerVelocity.y = 1;
    }
    playerVelocity.normalize(); // Makes sure diagonal speed is set the same as right and left
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);

    //  if(playerVelocity.x = -1 ){
    //    this.setScale.x*=-1;
    //  }
    /////////////////// SET ANIMATION ///////////////////

    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play('mijke_walk', true);
    } else {
      this.anims.play('mijke_idle', true);
    }

    this.spriteWeapon.setPosition(this.x, this.y)
    this.weaponRotate();

  }
  weaponRotate() {
    if (this.inputKeys.attack.isDown) {
      this.weaponRotation += 6;
    } else {
      this.weaponRotation = 0;
    }
    if (this.weaponRotation > 130) {
      this.weaponRotation = 0;
    }

    if (this.flipX) {
      this.spriteWeapon.setAngle(-this.weaponRotation - 90);
    } else {
      this.spriteWeapon.setAngle(this.weaponRotation);
    }
  }
}