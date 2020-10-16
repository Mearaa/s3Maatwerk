 class MainScene extends Phaser.Scene{
  constructor(){
    super("MainScene");
  }

  preload(){
    console.log("preload");
    Player.preload(this);
    this.load.image("tiles",'assets/images/Tilemapnew.png');
    this.load.image("tiles2",'assets/images/Animated Tiles.png');
    this.load.tilemapTiledJSON("map", 'assets/images/map.json');
    this.load.atlas('resources', 'assets/images/resources.png', 'assets/images/resources_atlas.json');

  }

  create(){
    // console.log("create");
  //  this.player = new Phaser.Physics.Matter.Sprite(this.matter.world, 0,0, 'female','townsfolk_f_idle_1'); //creates player

/////////////////// CODE FOR THE MAP ///////////////////
this.game.plugins.add(Phaser.Plugin.TilemapPlus);
  const map = this.make.tilemap({key:"map"});
  this.map = map;

//  this.sys.animatedTiles.init(map);

  const tileset = map.addTilesetImage("Tilemapnew","tiles");
  const tileset2 = map.addTilesetImage("Animated Tiles","tiles2");
  const layer1 = map.createDynamicLayer("Tile Layer 1", tileset,0,0);
  const layer2 = map.createDynamicLayer("Tile Layer 2", tileset,0,0);
  const layer3 = map.createDynamicLayer("Tile Layer 3", tileset,0,0);
  const layer4 = map.createDynamicLayer("Tile Layer 4", tileset2,0,0);
  this.game.tilemap.plus.animation.enable();


  layer1.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer1);

  layer2.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer2);

  layer3.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer3);

  layer4.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer4);

/////////////////// SET PLAYER ///////////////////

   this.player = new Player({scene:this ,x:220, y:20, texture:'female',frame:'townsfolk_f_idle_1'});
   this.player.body.setCollideWorldBounds = true;
   this.player.body.onWorldBounds = true;




  /////////////////// RESOURCE METHOD ///////////////////
   this.addResources();


  /////////////////// MOVEMENT PLAYER ///////////////////

//    this.add.existing(this.player);//Creates player
    this.player.inputKeys = this.input.keyboard.addKeys({ //creates key bindings
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left:  Phaser.Input.Keyboard.KeyCodes.A,
      right:  Phaser.Input.Keyboard.KeyCodes.D,
       attack: Phaser.Input.Keyboard.KeyCodes.Q,
    });


  }

  /////////////////// SET RESOURCES ///////////////////

  addResources(){
    const resources = this.map.getObjectLayer("Resources");
    resources.objects.forEach(resource =>{
      var resourceItem = new Phaser.Physics.Matter.Sprite(this.matter.world, resource.x, resource.y, 'resources', resource.type);
      var setYOrigin = resource.properties.find(p=>p.name == 'setYOrigin').value; // Gets origin from Tiled so that tree collider is not in the middle
      resourceItem.x += resourceItem.width/2;
      resourceItem.y += resourceItem.height/2;
      resourceItem.y = resourceItem.y + resourceItem.height * (setYOrigin - 0.5);

      const {Body,Bodies} = Phaser.Physics.Matter.Matter;
      var circleCollider = Bodies.circle(resourceItem.x, resourceItem.y, 6,{isSensor:false,label:'collider'});
      resourceItem.setExistingBody(circleCollider);

      resourceItem.setStatic(true);

      resourceItem.setOrigin(0.5, setYOrigin);
      console.log(resource);
      this.add.existing(resourceItem);
    })
  }

  update(){
    this.player.update();

  }
}
