export default class Hud extends PIXI.DisplayObjectContainer {

  constructor(identifier, isBase = true) {
    super();

    this.bg = new PIXI.Sprite(PIXI.Texture.fromFrame("hudBar.png"));
    this.addChild(this.bg);

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

    this.startProgressX = 48;
    this.startProgressY = 24;
    this.marginX = 48;

    this.progressCount = 0;
    this.progressPoints = 0;

    // TODO: remove me
    this.addProgress('bad')
    this.addProgress('good')
    this.addProgress('perfect')
  }

  addProgress(kind) {
    var points = { 'bad': 0, 'good': 1, 'perfect': 2 }
    var progressIcon = new PIXI.Sprite.fromFrame('progress-' + kind + '.png');

    progressIcon.x = this.startProgressX + (this.marginX * this.progressCount);
    progressIcon.y = this.startProgressY;
    this.addChild(progressIcon);

    this.progressPoints += points[kind];
    this.progressCount++;
  }

}



