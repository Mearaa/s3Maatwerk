# S3 Maatwerk game

Dit is een game gemaakt voor het S3 ICT & Media Design FHICT semester door Meara.

## Installatie

Download de repository van GIT en installeer het.
```javascript

npm install

```

Als dit niet werkt dan kan het los geinstalleerd worden.

```javascript

npm install johnny-five
npm install socket.io
npm install phaser-tilemap-plus

``` 

## Gebruik
Zorg dat de folder in de server van keuze staat bv WAMP of MAMP. Voer hierna het volgende in in de terminal:

```javascript
cd server
node controller-server.js

```
In het geval van een CORS Policy error kan deze extensie gedownload worden: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc 

Vervolgens moeten hier een paar advanced settings aangepast worden:

Origin: http://localhost

Acces Control Allow Origin: http://localhost

Acces Control Allow Credentials: true

Met deze instellingen moet de error verholpen zijn.

## Opbouw Survival-game.js
Deze JS is opgebouw in JSON formaat zodat dit gemakkelijk af te lezen is. Hier worden de basic configuraties in weer gegeven zoals welke physics engine er gebruikt wordt, in dit geval matter engine. Belangrijk om te weten is dat dit spel niet omgezet kan worden naar arcade ivm meerdere functies die gebruikt zijn onder de matter engine. Om te zien waar alle colliders te zitten in het spel kan je hier debug:true aanzetten ipv false. 

## Opbouw MainScene.js

In de preload worden alle assets ingeladen waaronder de reguliere map en de geanimeerde map en de verschillende resources. Ook wordt hier de plugin geladen voor de geanimeerde map.

In de create worden de voorheen genoemde map en resources ook daadwerkelijk gemaakt. Hier worden de lagen van Tiled ook meegeroepen, aangemaakt en wordt de collider aangezet. In de create functie wordt er ook een nieuwe instantie van de speler aangeroepen. 

In de update functie wordt de speler continu geupdate met name de positie en animatie. 

## Opbouw Player.js

In regel 14 tm 17 wordt het wapen gemaakt en toegevoegd.

Van regel 20 tm 40 wordt het "lichaam" van de speler gemaakt. Hier wordt de collider en sensor gedefineerd. Hier wordt ook de grootte van de collider aangegeven.

In de static preload worden de frames en images ingeladen die nodig zijn voor het uiterlijk van de speler.

De update functie luistert naar de verschillende manieren om te bewegen. Zo kunnen de WASD toetsen gebruikt worden of, als de arduino aan staat, met de joystick. 

Vanaf regel 85 tm 92 worden de animaties gekoppeld aan de status van de speler. Hier worden de walk en idle animations gekoppeld. 

Vanaf regel 96 tot 110 wordt de weaponrotation functie aangemaakt. Hierin wordt gedefineerd dat als er op de knop Q of de arduino knop gedrukt wordt dat het wapen een swing beweging maakt. 

## Opbouw controller-server.js

Van regel 2 tm 3 wordt er geluisterd naar de server met de port 8000.

Van regel 31 tm 33 worden de pins gedefineerd voor de joystiek. Op de Arduino Joystick Shield v2.4 zijn dit altijd A0 en A1. 
Op regel 34 word de pin gedefineerd voor de button namelijk 3. Dat is de rechterbutton op de joystick shield. 

Vanaf regel 37 tm 54 wordt de joystick functie aangemaakt. Hier wordt er geluisterd naar de waardes die de joystick shield meegeeft en krijgt de var direction hier de waarde W A S of D. Deze waardes zullen zelf gecontroleerd moeten worden aangezien deze kunnen afwijken van jouw joystick shield. 

De functie voor de button is ietwat afwijkend:

```javascript
button.on("down", function(){ 
      var attack;
        attack = "No" 
      io.sockets.emit('button', attack); // Passes the attack value to the client
    });
    
    button.on("up", function(){
      attack = "Q"; 
      io.sockets.emit('button', attack); // Passes the attack value to the client

```
Zoals hier te zien is is de knop eigenlijk inverted. Hoe dit precies komt heb ik niet kunnen achterhalen maar het is zeker iets om op te letten. 

## Opbouw controller-client.js

Hier worden de messages die vanuit de server naar de client worden gesturd gedefineerd die het vervolgens weer meegeeft aan de andere classes zoals de player class. 


## Opbouw Resource.js

In Resource.js worden de resources toegevoegd waarmee (in de toekomst) de speler iets kan doen. Hier worden de resources ook toegevoegd met hun eigen collider die anders is dan de colliders van het water. Dit zijn ronde colliders. 


## Controls
De speler is te bedienen door middel van de WASD keys en valt de speler aan met de Q key. Mocht dit niet de gewenste keys zijn dan kunnen deze veranderd worden in MainScene.js vanaf regel 90.

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

De speler kan aangepast worden in Player.js vanaf regel 46


```javascript
    static preload(scene){ //Static methods aren't called on instances of the class. Instead, they're called on the class itself.
    scene.load.atlas('mijke', 'assets/images/mijke.png', 'assets/images/mijke_atlas.json');
    scene.load.animation('mijke_anim','assets/images/mijke_anim.json');
    scene.load.spritesheet('weapons','assets/images/weapons.png',{frameWidth: 32, frameHeight:32});
  }
```
De speler animatie kan veranderd worden in Player.js vanaf regel 85
```javascript
    if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1){
      this.anims.play('mijke_walk',true);
    } else {
      this.anims.play('mijke_idle',true);
    }

```
Als laatste moet dan alleen in de MainScene.js waar de speler aangeroepen wordt de naam van het bestand veranderd worden. Dit kan in regel 71. Hier geef je ook aan met welk frame de speler begint. 

```javascript
 this.player = new Player({
      scene: this,
      x: 220, // Starting position
      y: 20,
      texture: 'mijke', // Gets the image
      frame: 'mijke_walk_1' // Gets the starting frame
    });

```

## Map
De huidige map is gemaakt met Tiled. Mocht dit niet de gewenste map zijn dan kan er een nieuwe map gemaakt worden in tiled. **_Let op!_** Als er op export gedrukt wordt in tiled is het van belang dat de volgende punten goed staan anders werkt de map niet en werkt de animated tiles plugin niet. 

- Edit > Preferences > Resolve Objects and properties moet aan staan en embed tilemaps
- Het bestand van tiled moet uncompressed zijn

De map kan aangepast worden via MainScene.js in de preload vanaf regel 15

```javascript
    
    this.load.image("tiles",'assets/images/Tilemapnew.png');
    this.load.image("tiles2",'assets/images/Animated Tiles.png');
    this.load.tilemapTiledJSON("map", 'assets/images/map.json');
   =
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
## Extra informatie

Voor extra informatie over hoe bepaalde functies precies werken is er het bestand js notes. Hier staat al mijn bevindingen in en bronnen met uitleg over de verschillende functies en methodes die gebruikt zijn. Ook staat hier een error log in en hoe deze erros zijn opgelost. 