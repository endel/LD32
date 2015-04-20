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
    this.timeLabel.x = 1020
    this.timeLabel.anchor.x = 0.5
    this.addChild(this.timeLabel);

    this.waveLabel.y = this.timeLabel.y = 14

    this.startProgressX = 54;
    this.startProgressY = 30;
    this.marginX = 48;

    this.progressCount = 0;
    this.progressPoints = 0;

    // feedbacks
    this.great = new PIXI.Sprite(PIXI.Texture.fromFrame("inGameWarningPerfect.png"));
    this.great.anchor.x = 0.5;
    this.great.anchor.y = 0.5;
    this.great.x = SCREEN_WIDTH/2;
    this.great.y = SCREEN_HEIGHT/2 - 20;
    this.great.alpha = 0;
    this.addChild(this.great);

    this.good = new PIXI.Sprite(PIXI.Texture.fromFrame("inGameWarningGood.png"));
    this.good.anchor.x = 0.5;
    this.good.anchor.y = 0.5;
    this.good.x = SCREEN_WIDTH/2;
    this.good.y = SCREEN_HEIGHT/2 - 20;
    this.good.alpha = 0;
    this.addChild(this.good);

    this.bad = new PIXI.Sprite(PIXI.Texture.fromFrame("inGameWarningBad.png"));
    this.bad.anchor.x = 0.5;
    this.bad.anchor.y = 0.5;
    this.bad.x = SCREEN_WIDTH/2;
    this.bad.y = SCREEN_HEIGHT/2 - 20;
    this.bad.alpha = 0;
    this.addChild(this.bad);

    this.timeup = new PIXI.Sprite(PIXI.Texture.fromFrame("inGameWarningTime.png"));
    this.timeup.anchor.x = 0.5;
    this.timeup.anchor.y = 0.5;
    this.timeup.x = SCREEN_WIDTH/2;
    this.timeup.y = SCREEN_HEIGHT/2 - 20;
    this.timeup.alpha = 0;
    this.addChild(this.timeup);

    events.on('delivered-performance', this.showPerformanceFeedback.bind(this));
  }

  showPerformanceFeedback(performance) {
    
    if(performance == "great")
    {
        this.great.y = SCREEN_HEIGHT/2 - 20;
        TweenMax.to(this.great, 0.8, { y:SCREEN_HEIGHT/2-70,alpha:1 })
        TweenMax.to(this.great, 1.0, { delay:1.4,y:SCREEN_HEIGHT/2-100,alpha:0})
    }else if(performance == "good")
    {
        this.good.y = SCREEN_HEIGHT/2 - 20;
        TweenMax.to(this.good, 0.8, { y:SCREEN_HEIGHT/2-70,alpha:1 })
        TweenMax.to(this.good, 1.0, { delay:1.4,y:SCREEN_HEIGHT/2-100,alpha:0})
    }else if(performance == "bad")
    {
        this.bad.y = SCREEN_HEIGHT/2 - 20;
        TweenMax.to(this.bad, 0.8, { y:SCREEN_HEIGHT/2-70,alpha:1 })
        TweenMax.to(this.bad, 1.0, { delay:1.4,y:SCREEN_HEIGHT/2-100,alpha:0})
    }else if(performance == "time")
    {
        this.timeup.y = SCREEN_HEIGHT/2 - 20;
        TweenMax.to(this.timeup, 0.8, { y:SCREEN_HEIGHT/2-70,alpha:1 })
        TweenMax.to(this.timeup, 1.0, { delay:1.4,y:SCREEN_HEIGHT/2-100,alpha:0})
    }
    
  }


  addProgress(kind) {
    var points = { 'bad': 0, 'good': 1, 'great': 2 }
    var colors = { 'bad': '#f10000', 'good': '#FFC600', 'great': '#15e730' }

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



