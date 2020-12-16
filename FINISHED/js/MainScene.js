import Player from "./Player.js";
import "../node/phaser-animated-tiles-master/dist/AnimatedTiles.js";
import Resource from "./Resource.js";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    // This is the code that loads the images we are going to use in the map such as the player, map and the resources. 
    console.log("preload");
    Player.preload(this);
    Resource.preload(this);
    this.load.image("tiles", 'assets/images/Tilemapnew.png');
    this.load.image("tiles2", 'assets/images/Animated Tiles.png');
    this.load.tilemapTiledJSON("map", 'assets/images/map.json');
    this.load.atlas('resources', 'assets/images/resources.png', 'assets/images/resources_atlas.json');

    // This is where the plugin loads for the animated tiles. 
    this.load.scenePlugin({
      key: 'AnimatedTiles',
      url: 'node/phaser-animated-tiles-master/dist/AnimatedTiles.js',
      sceneKey: 'MainScene'

    });
  }


  create() {
    /////////////////// CODE FOR THE MAP ///////////////////
    const map = this.make.tilemap({
      key: "map"
    });
    this.map = map;
    // Tileset is for the regular map. Tileset 2 is for the animated tiles. They are 2 different tilesets.
    const tileset = map.addTilesetImage("Tilemapnew", "tiles");
    const tileset2 = map.addTilesetImage("Animated Tiles", "tiles2");
    const layer1 = map.createDynamicLayer("Tile Layer 1", tileset, 0, 0);
    const layer2 = map.createDynamicLayer("Tile Layer 2", tileset, 0, 0);
    const layer3 = map.createDynamicLayer("Tile Layer 3", tileset, 0, 0);
    const layer4 = map.createDynamicLayer("Tile Layer 4", tileset2, 0, 0);
    // Dynamic layers are necessary in order to interact with the objects on the layer as well as the animated tiles.

    // Here we define that there are colission objects in the layers. The colission is defined in Tiled.
    layer1.setCollisionByProperty({
      collide: true
    });
    this.matter.world.convertTilemapLayer(layer1);

    layer2.setCollisionByProperty({
      collide: true
    });
    this.matter.world.convertTilemapLayer(layer2);

    layer3.setCollisionByProperty({
      collide: true
    });
    this.matter.world.convertTilemapLayer(layer3);

    layer4.setCollisionByProperty({
      collide: true
    });
    this.matter.world.convertTilemapLayer(layer4);

    this.sys.AnimatedTiles.init(map);
    // This initiates the animated tiles. 

    /////////////////// SET PLAYER ///////////////////

    this.player = new Player({
      scene: this,
      x: 220, // Starting position
      y: 20,
      texture: 'mijke', // Gets the image
      frame: 'mijke_walk_1' // Gets the starting frame
    });
    this.player.body.setCollideWorldBounds = true; // Sets the colission on the player
    this.player.body.onWorldBounds = true;

    /////////////////// ADDING RESOURCES ///////////////////
    this.map.getObjectLayer('Resources').objects.forEach(resource => new Resource({
      scene: this,
      resource
    })); // Adds the resources to the map


    /////////////////// MOVEMENT PLAYER ///////////////////

    this.player.inputKeys = this.input.keyboard.addKeys({ //creates key bindings
      up: Phaser.Input.Keyboard.KeyCodes.W, // These are the key bindings that are attatched to the players movement. 
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      attack: Phaser.Input.Keyboard.KeyCodes.Q,
    });

  }
  update() {
    // Updates the position, frame, texture etc of the player. 
    this.player.update();

  }
}