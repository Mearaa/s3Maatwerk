
const config = {
  width: 512,
  height:512,
  backgroundColor:'#999999',
  type: Phaser.AUTO,
  parent: 'surival-game',
  scene:[MainScene],
  scale: {
    zoom: 2,
  },
  physics:{
    default: 'matter',
    matter:{
      debug:true,
      gravity:false, //Gravity off
      enableBody: true,
    },
  },
  plugin:{
    scene:[
      {
        plugin:PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping:'matterCollision'

      }
    ]
  }
}

new Phaser.Game(config);
