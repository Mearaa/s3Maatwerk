import MainScene from "./MainScene.js"
const config = {
  width: 512,
  height: 512,
  type: Phaser.AUTO,
  parent: 'surival-game',
  scene: [MainScene],
  scale: {
    zoom: 2,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: false,
      gravity: false, //Gravity off
      enableBody: true,
    },
  },
  plugin: {
    scene: [{
      plugin: PhaserMatterCollisionPlugin,
      key: 'matterCollision',
      mapping: 'matterCollision'

    }]
  }
}

new Phaser.Game(config);