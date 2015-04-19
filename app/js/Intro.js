import Craft from './Craft'

export default class Intro extends PIXI.Stage {

  constructor() {
    super();

    var background = new PIXI.Sprite(PIXI.Texture.fromImage("images/home.png"));
    this.addChild(background);

    var startLabel = new PIXI.Text("Start game", {
      font: LARGE_FONT,
      stroke: "#fff",
      align: "center"
    });
    startLabel.anchor.x = 0.5
    startLabel.x = SCREEN_WIDTH / 2;
    startLabel.y = (SCREEN_HEIGHT / 2) + 130;
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
