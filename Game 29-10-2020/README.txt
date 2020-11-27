# S3 Maatwerk game

Dit is een game gemaakt voor het S3 ICT & Media Design FHICT semester door Meara.

## Installatie

Download de repository van GIT en installeer de plugin voor de animated tiles.
```javascript

cd node
cd phaser-animated-tiles-master
npm install

```
## Gebruik
Om de game te kunnen gebruiken dient de folder geopend te worden in Microsoft Visual code. Open index.html, rechtermuisklik en "Open with live server". 

## Opbouw Survival-game.js
Deze JS is opgebouw in JSON formaat zodat dit gemakkelijk af te lezen is. Hier worden de basic configuraties in weer gegeven zoals welke physics engine er gebruikt wordt, in dit geval matter engine. Belangrijk om te weten is dat dit spel niet omgezet kan worden naar arcade ivm meerdere functies die gebruikt zijn onder de matter engine. Om te zien waar alle colliders te zitten in het spel kan je hier debug:true aanzetten ipv false. 

## Opbouw MainScene.js

In de preload worden alle assets ingeladen waaronder de reguliere map en de geanimeerde map en de verschillende resources. Ook wordt hier de plugin geladen voor de geanimeerde map.

In de create worden de voorheen genoemde map en resources ook daadwerkelijk gemaakt. Hier worden de lagen van Tiled ook meegeroepen, aangemaakt en wordt de collider aangezet. In de create functie wordt er ook een nieuwe instantie van de speler aangeroepen. 

In de update functie wordt de speler continu geupdate met name de positie en animatie. 

## Opbouw MainScene.js


## Controls
De speler is te bedienen door middel van de WASD keys en valt de speler aan met de Q key. Mocht dit niet de gewenste keys zijn dan kunnen deze veranderd worden in MainScene.js vanaf regel 74.

```javascript

 this.player.inputKeys = this.input.keyboard.addKeys({ //creates key bindings
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left:  Phaser.Input.Keyboard.KeyCodes.A,
      right:  Phaser.Input.Keyboard.KeyCodes.D,
       attack: Phaser.Input.Keyboard.KeyCodes.Q,
    });
```

## Uiterlijk van de speler
Als het uiterlijk van de character veranderd moeten worden zullen de volgende files vervangen moeten worden. 

- mijke.png
- mijke_atlas.json
- mijke_anim.json

Een eigen atlas e.d. kan gemakkelijk gemaakt worden via https://gammafp.com/tools/ met de Atlas packer en de Animator tool.

De speler kan aangepast worden in Player.js vanaf regel 27


```javascript
    static preload(scene){ //Static methods aren't called on instances of the class. Instead, they're called on the class itself.
    scene.load.atlas('mijke', 'assets/images/mijke.png', 'assets/images/mijke_atlas.json');
    scene.load.animation('mijke_anim','assets/images/mijke_anim.json');
    scene.load.spritesheet('weapons','assets/images/weapons.png',{frameWidth: 32, frameHeight:32});
  }
```
De speler animatie kan veranderd worden in Player.js vanaf regel 69
```javascript
    if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1){
      this.anims.play('mijke_walk',true);
    } else {
      this.anims.play('mijke_idle',true);
    }

```
Als laatste moet dan alleen in de MainScene.js waar de speler aangeroepen wordt de naam van het bestand veranderd worden. Dit kan in regel 59. Hier geef je ook aan met welk frame de speler begint. 

```javascript
 this.player = new Player({scene:this ,x:220, y:20, texture:'mijke',frame:'mijke_walk_1'});

```

## Map
De huidige map is gemaakt met Tiled. Mocht dit niet de gewenste map zijn dan kan er een nieuwe map gemaakt worden in tiled. **_Let op!_** Als er op export gedrukt wordt in tiled is het van belang dat de volgende punten goed staan anders werkt de map niet en werkt de animated tiles plugin niet. 

- Edit > Preferences > Resolve Objects and properties moet aan staan en embed tilemaps
- Het bestand van tiled moet uncompressed zijn

De map kan aangepast worden via MainScene.js in de preload vanaf regel 12

```javascript
    
    this.load.image("tiles",'assets/images/Tilemapnew.png');
    this.load.image("tiles2",'assets/images/Animated Tiles.png');
    this.load.tilemapTiledJSON("map", 'assets/images/map.json');
    this.load.atlas('resources', 'assets/images/resources.png', 'assets/images/resources_atlas.json');
```
en vanaf regel 31 om de lagen in tiled mee te geven

``` javascript
 const map = this.make.tilemap({key:"map"});
  this.map = map;

  const tileset = map.addTilesetImage("Tilemapnew","tiles");
  const tileset2 = map.addTilesetImage("Animated Tiles","tiles2");
  const layer1 = map.createDynamicLayer("Tile Layer 1", tileset,0,0);
  const layer2 = map.createDynamicLayer("Tile Layer 2", tileset,0,0);
  const layer3 = map.createDynamicLayer("Tile Layer 3", tileset,0,0);
  const layer4 = map.createDynamicLayer("Tile Layer 4", tileset2,0,0);



  layer1.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer1);

  layer2.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer2);

  layer3.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer3);

  layer4.setCollisionByProperty({collide:true});
  this.matter.world.convertTilemapLayer(layer4);

  this.sys.AnimatedTiles.init(map);
```
## Feedback

Graag hoor ik of er nog feedback punten zijn. Zeker als het de readme file zelf betreft aangezien dit mijn eerste keer is met het maken van een readme file. 