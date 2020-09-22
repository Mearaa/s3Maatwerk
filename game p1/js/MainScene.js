 class MainScene extends Phaser.Scene{
  constructor(){
    super("MainScene");
  }

  preload(){
    console.log("preload");
    Player.preload(this);

  }

  create(){
    // console.log("create");
  //  this.player = new Phaser.Physics.Matter.Sprite(this.matter.world, 0,0, 'female','townsfolk_f_idle_1'); //creates player
   this.player = new Player({scene:this ,x:0, y:0, texture:'female',frame:'townsfolk_f_idle_1'});
   let textPlayer = new Player({scene:this ,x:100, y:100, texture:'female',frame:'townsfolk_f_idle_1'});
//    this.add.existing(this.player);//Creates player
    this.player.inputKeys = this.input.keyboard.addKeys({ //creates key bindings
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left:  Phaser.Input.Keyboard.KeyCodes.A,
      right:  Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  update(){
    this.player.update();
  }
}
