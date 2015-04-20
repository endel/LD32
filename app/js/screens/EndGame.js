import ParticleEmitter from '../components/ParticleEmitter';

export default class EndGame extends PIXI.Stage {

  constructor(responses) {
    super();

    this.bg = new PIXI.Sprite(PIXI.Texture.fromFrame("endgame.png"));
    this.addChild(this.bg);

    // same from Hud.js
    this.startProgressX = 342;
    this.startProgressY = 282;
    this.marginX = 48;

    this.responses = responses;
    this.setupBullets();
    this.setupScore();
  }

  setupScore() {
    var lostWaves = 0;
    var wonWaves = 0;
    var greatWaves = 0;

    for (let i=0;i<this.responses.length; i++) {
      if (this.responses[i] !== "bad") {
        wonWaves++;

      } else {
        lostWaves++;
      }

      if (this.responses[i] === "great") { greatWaves++; }
    }

    // play win / lose sound
    var didWon = (wonWaves >= 5);
    sounds.stop();
    soundsBackground.stop();
    if (didWon) {
      sounds.play('game_win');
    } else {
      sounds.play('game_lose');
    }

    var feebackText = (didWon) ? "You've won!" : "You've lost!";
    this.feedbackLabel = new PIXI.Text(feebackText, {
      font: DEFAULT_FONT,
      fill: "#fff",
      align: "center"
    })
    this.feedbackLabel.anchor.x = 0.5;
    this.feedbackLabel.anchor.y = 0.5;
    this.feedbackLabel.x = SCREEN_WIDTH / 2;
    this.feedbackLabel.y = SCREEN_HEIGHT / 2 + 50;
    this.addChild(this.feedbackLabel);

    this.statusLabel = new PIXI.Text(`You ${wonWaves} x ${lostWaves} Enemies`, {
      font: DEFAULT_FONT,
      fill: "#fff",
      align: "center"
    });
    this.statusLabel.anchor.x = 0.5;
    this.statusLabel.anchor.y = 0.5;
    this.statusLabel.x = SCREEN_WIDTH / 2;
    this.statusLabel.y = this.feedbackLabel.y + 30;
    this.addChild(this.statusLabel);

    TweenMax.from(this.feedbackLabel, 1, { alpha: 0, y: this.statusLabel.y + 10, ease: Power2.easeOut })
    TweenMax.from(this.statusLabel, 1, { alpha: 0, y: this.statusLabel.y + 10, ease: Power2.easeOut, delay: 0.5 })
  }

  setupBullets() {
    var colors = { 'bad': '#f10000', 'good': '#FFC600', 'great': '#15e730' }

    for (let i=0;i<this.responses.length; i++) {
      var frameName = 'progress-' + this.responses[i] + '.png';
      var progressIcon = new PIXI.Sprite.fromFrame(frameName);

      progressIcon.anchor.x = 0.5;
      progressIcon.anchor.y = 0.5;
      progressIcon.alpha = 0;
      progressIcon.rotation = 0;
      progressIcon.x = this.startProgressX + (this.marginX * i);
      progressIcon.y = this.startProgressY;
      this.addChild(progressIcon);

      progressIcon.scale.x = 10;
      progressIcon.scale.y = 10;

      TweenMax.to(progressIcon.scale, 0.5, { x: 1, y: 1, ease: Power2.easeOut, delay: i * 0.05  })
      TweenMax.to(progressIcon, 0.5, { rotation: Math.PI * 45, ease: Power2.easeOut, alpha: 1, delay: i * 0.05 })
    }
  }

  update() {
  }

  dispose() {
    this.removeChildren();
  }

}
