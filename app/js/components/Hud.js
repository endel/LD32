import ParticleEmitter from './ParticleEmitter';

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
    this.waveLabel.anchor.x = 0.5
    this.addChild(this.waveLabel);

    this.timeLabel = new PIXI.Text("10", {
      font: LARGE_FONT,
      fill: "#fff",
      align: "center"
    })
    this.timeLabel.x = 990
    this.timeLabel.anchor.x = 0.5
    this.addChild(this.timeLabel);

    this.waveLabel.y = this.timeLabel.y = 14

    this.startProgressX = 54;
    this.startProgressY = 30;
    this.marginX = 48;

    this.progressCount = 0;
    this.progressPoints = 0;
  }

  addProgress(kind) {
    var points = { 'bad': 0, 'good': 1, 'great': 2 }
    var colors = { 'bad': '#C20A0A', 'good': '#FFC600', 'great': '#18A52A' }

    var frameName = 'progress-' + kind + '.png';
    var progressIcon = new PIXI.Sprite.fromFrame(frameName);
    progressIcon.anchor.x = 0.5;
    progressIcon.anchor.y = 0.5;
    progressIcon.alpha = 0;
    progressIcon.rotation = 0;
    progressIcon.x = this.startProgressX + (this.marginX * this.progressCount);
    progressIcon.y = this.startProgressY;
    this.addChild(progressIcon);

    progressIcon.scale.x = 10;
    progressIcon.scale.y = 10;

    TweenMax.to(progressIcon.scale, 0.5, { x: 1, y: 1, ease: Power2.easeOut })
    TweenMax.to(progressIcon, 0.5, { rotation: Math.PI * 45, ease: Power2.easeOut,  alpha: 1 })

    this.progressPoints += points[kind];
    this.progressCount++;

    var emitter = new ParticleEmitter(frameName, { start: colors[kind], end: colors[kind] });
    emitter.x = this.x + progressIcon.x;
    emitter.y = this.y + progressIcon.y;
    this.parent.addChild(emitter)
  }

}



