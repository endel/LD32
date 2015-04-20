
export default class EndGame extends PIXI.Stage {

  constructor() {
    super();

    this.bg = new PIXI.Sprite(PIXI.Texture.fromFrame("endgame.png"));
    this.addChild(this.bg);
  }

  update() {
  }

}
