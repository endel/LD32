export default class Hud extends PIXI.DisplayObjectContainer {

  constructor(identifier, isBase = true) {
    super();

    this.bg = new PIXI.Sprite(PIXI.Texture.fromImage("images/hudBar.png"));
    this.addChild(this.bg);

    this.boxHeight = 72;

    this.waveLabel = new PIXI.Text("1", {
      font: LARGE_FONT,
      fill: "#fff",
      align: "center"
    })
    this.waveLabel.x = 830
    this.addChild(this.waveLabel);

    this.timeLabel = new PIXI.Text("10", {
      font: LARGE_FONT,
      fill: "#fff",
      align: "center"
    })
    this.timeLabel.x = 990
    this.addChild(this.timeLabel);

    this.waveLabel.y = this.timeLabel.y = 14
  }

}



