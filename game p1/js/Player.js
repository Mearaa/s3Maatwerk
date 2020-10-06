 class Player extends Phaser.Physics.Matter.Sprite {
  constructor(data){ //A constructor is just the initialization function that gets called when you use the ‘new’ keyword to instantiate an object.
    var{scene,x,y,texture,frame} = data;
    super(scene.matter.world,x,y,texture,frame); //method that is used to call an object's parent.
    this.scene.add.existing(this);

    //Sensors trigger collision events, but don't react with colliding body physically.
    const {Body, Bodies} = Phaser.Physics.Matter.Matter;
    var playerCollider = Bodies.circle(this.x, this.y, 12,{isSensor:false, label:'playerCollider'});
    var playerSensor = Bodies.circle(this.x , this.y, 24,{isSensor:true, label:'playerSensor'});

    const compoundBody = Body.create({
      parts:[playerCollider,playerSensor],
      setFrictionAir: 0.35}); //Sets a new air resistance for this Game Object's Matter Body

    this.setExistingBody(compoundBody);
    this.setFixedRotation(); // Player doesn't rotate when collides
  }

  static preload(scene){ //Static methods aren't called on instances of the class. Instead, they're called on the class itself.
    scene.load.atlas('female', 'assets/images/female.png', 'assets/images/female_atlas.json');
    scene.load.animation('female_anim','assets/images/female_anim.json');
  }

  get velocity(){ //Gets velocity for animation
    return this.body.velocity;
  }

  update(){
    const speed = 2.5;
    var playerVelocity = new Phaser.Math.Vector2(); //Let kan ook gebruikt worden omdat het alleen in deze scope valt.
    if(this.inputKeys.left.isDown){ //Movement
      playerVelocity.x = -1
    } else if(this.inputKeys.right.isDown){
      playerVelocity.x =1;
    }
    if(this.inputKeys.up.isDown){
      playerVelocity.y = -1
    } else if(this.inputKeys.down.isDown){
      playerVelocity.y =1;
    }
    playerVelocity.normalize(); // Makes sure diagonal speed is set the same as right and left
    playerVelocity.scale(speed);
    this.setVelocity(playerVelocity.x, playerVelocity.y);



    if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1){
      this.anims.play('female_walk',true);
    } else {
      this.anims.play('female_idle',true);
    }


  }
}
