import Craft from './Craft'

export default class Intro extends PIXI.Stage {

  constructor() {
    super();
    sounds.play('intro_tip')

    var background = new PIXI.Sprite(PIXI.Texture.fromFrame("home.png"));
    this.addChild(background);

    var startLabel = new PIXI.Text("click to craft", {
      font: DEFAULT_FONT,
      fill: "#372616",
      align: "center"
    });
    startLabel.anchor.x = 0.5
    startLabel.x = SCREEN_WIDTH / 2;
    startLabel.y = (SCREEN_HEIGHT / 2) + 123;
    startLabel.interactive = true;
    startLabel.click = startLabel.tap = this.startGame.bind(this);
    this.addChild(startLabel);
  }

  startGame() {
    sounds.play('intro_play')
    controller.setStage(new Craft);
  }

  update() {
  }

}
