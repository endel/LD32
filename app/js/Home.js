import Craft from './Craft'

export default class Intro extends PIXI.Stage {

  constructor() {
    super();

    var background = new PIXI.Sprite(PIXI.Texture.fromImage("images/grass.png"));
    background.width = window.innerWidth;
    background.height = window.innerHeight;
    this.addChild(background);

    var startLabel = new PIXI.Text("Start game", {
      font: "20px Arial",
      stroke: "#fff",
      align: "center"
    });
    // startLabel.anchor.x = startLabel.width / 2;
    // startLabel.anchor.y = startLabel.height / 2;
    startLabel.x = window.innerWidth / (2 * SCALE_RATIO);
    startLabel.y = window.innerHeight / (2 * SCALE_RATIO);
    startLabel.interactive = true;
    startLabel.click = startLabel.tap = this.startGame.bind(this);
    this.addChild(startLabel);
  }

  startGame() {
    controller.setStage(new Craft);
  }

  update() {
  }

}

