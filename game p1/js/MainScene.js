 class MainScene extends Phaser.Scene{
  constructor(){
    super("MainScene");
  }

  preload(){
    console.log("preload");
    Player.preload(this);
    this.load.image("tiles",'assets/images/Tilemapnew.png');
    this.load.tilemapTiledJSON("map", 'assets/images/testing.json');
  }

  create(){
    // console.log("create");
  //  this.player = new Phaser.Physics.Matter.Sprite(this.matter.world, 0,0, 'female','townsfolk_f_idle_1'); //creates player
  const map = this.make.tilemap({key:"map"});

  const tileset = map.addTilesetImage("Tilemapnew","tiles");
  const layer1 = map.createStaticLayer("Tile Layer 1", tileset,0,0);
  const layer2 = map.createStaticLayer("Tile Layer 2", tileset,0,0);
  layer1.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer1);
   this.player = new Player({scene:this ,x:100, y:100, texture:'female',frame:'townsfolk_f_idle_1'});
   this.player.body.setCollideWorldBounds = true;
   this.player.body.onWorldBounds = true;


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
