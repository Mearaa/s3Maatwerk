export default class Resource extends Phaser.Physics.Matter.Sprite {
    static preload(scene) {
        scene.load.atlas('resources', 'assets/images/resources.png', 'assets/images/resources_atlas.json'); // loads the resources
    }
    constructor(data) {
        var {
            scene,
            resource
        } = data; 
        super(scene.matter.world, resource.x, resource.y, 'resources', resource.type);

        this.scene.add.existing(this);
        var setYOrigin = resource.properties.find(p => p.name == 'setYOrigin').value; // Gets origin from Tiled so that tree collider is not in the middle
        this.x += this.width / 2;  // Correction on the placement of the resources

        const {
            Body,
            Bodies
        } = Phaser.Physics.Matter.Matter;
        var circleCollider = Bodies.circle(this.x, this.y, 6, { // Defines the size of the colliders
            isSensor: false,
            label: 'collider'
        });

        this.setExistingBody(circleCollider); // adds the collider
        this.setStatic(true); // Makes sure that you can't bump the resources around
        this.setOrigin(0.5, setYOrigin); 
    } 
}