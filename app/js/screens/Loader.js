import Intro from './Intro'

export default class Loader extends PIXI.Stage {

  constructor() {
    super();

    this.loadCounter = 0;
    this.maxLoadCounter = 2;

    var that = this;

    this.indicator = new PIXI.Sprite(PIXI.Texture.fromImage("images/loadingicon.png"));
    this.indicator.anchor.x = 0.5;
    this.indicator.anchor.y = 0.5;
    this.indicator.x = SCREEN_WIDTH / 2;
    this.indicator.y = SCREEN_HEIGHT / 2;
    this.addChild(this.indicator);

    sounds.on('load', this.incrementLoader.bind(this));

    this.indicator.texture.baseTexture.on('loaded', function() {
      this.removeAllListeners();
      that.loader = new PIXI.AssetLoader(["spritesheet.json"]);
      that.loader.onComplete = that.incrementLoader.bind(that);
      that.loader.load();
    });
  }

  update() {
    this.indicator.rotation += 0.01;
  }

  incrementLoader() {
    this.loadCounter++;

    if (this.loadCounter == this.maxLoadCounter) {
      controller.setStage(new Intro);
    }
  }

  dispose() {
    this.removeChildren();
  }

}
