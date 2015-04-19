import Intro from './Intro'

export default class Loader extends PIXI.Stage {

  constructor() {
    super();

    var that = this;

    this.indicator = new PIXI.Sprite(PIXI.Texture.fromImage("images/pictureBlacksmith_0001.png"));
    this.indicator.anchor.x = 0.5;
    this.indicator.anchor.y = 0.5;
    this.indicator.x = SCREEN_WIDTH / 2;
    this.indicator.y = SCREEN_HEIGHT / 2;
    this.addChild(this.indicator);

    this.indicator.texture.baseTexture.on('loaded', function() {
      this.removeAllListeners();
      that.loader = new PIXI.AssetLoader(["spritesheet.json"]);
      that.loader.onComplete = that.onAssetsLoaded.bind(that);
      that.loader.load();
    });
  }

  update() {
    this.indicator.rotation += 0.01;
  }

  onAssetsLoaded() {
    console.log("Loaded!");
    controller.setStage(new Intro);
  }

}
