export default class TalkBox extends PIXI.DisplayObjectContainer {

  constructor() {
    super();

    this.margin = 11;

    this.textToShow = "";
    this.textAppendCount = 0;

    this.bg = new PIXI.Sprite(PIXI.Texture.fromFrame("textBox.png"))
    this.addChild(this.bg);

    this.image = new PIXI.DisplayObjectContainer();
    this.image.x = this.margin;
    this.image.y = this.margin;

    this.text = new PIXI.Text(this.textToShow, {
      font: DEFAULT_FONT,
      fill: "#fff",
      align: "left",
      wordWrap: true,
      wordWrapWidth: SCREEN_WIDTH - 178
    });
    this.text.x = this.image.x + 152 + this.margin;
    this.text.y = this.margin;

    this.addChild(this.image);
    this.addChild(this.text);

    this.currentAnimation = null;
    this.animations = {
      // customer animations
      'customer': {
        'normal': new PIXI.MovieClip([
          PIXI.Texture.fromFrame("pictureCustomer_0001.png"),
          PIXI.Texture.fromFrame("pictureCustomer_0002.png"),
        ]),
        'great': new PIXI.MovieClip([
          PIXI.Texture.fromFrame("pictureCustomer_0001.png"),
          PIXI.Texture.fromFrame("pictureCustomer_0002.png"),
        ]),
        'good': new PIXI.MovieClip([
          PIXI.Texture.fromFrame("pictureCustomer_0001.png"),
          PIXI.Texture.fromFrame("pictureCustomer_0004.png"),
        ]),
        'bad': new PIXI.MovieClip([
          PIXI.Texture.fromFrame("pictureCustomer_0005.png"),
          PIXI.Texture.fromFrame("pictureCustomer_0006.png"),
        ]),
      },

      // blacksmith animations
      'blacksmith': {
        'idle': new PIXI.MovieClip([
          PIXI.Texture.fromFrame("pictureBlacksmith_0001.png"),
          PIXI.Texture.fromFrame("pictureBlacksmith_0002.png"),
        ]),
        'happy': new PIXI.MovieClip([
          PIXI.Texture.fromFrame("pictureBlacksmith_0003.png"),
          PIXI.Texture.fromFrame("pictureBlacksmith_0004.png"),
          PIXI.Texture.fromFrame("pictureBlacksmith_0005.png"),
        ]),
        'sad': new PIXI.MovieClip([
          PIXI.Texture.fromFrame("pictureBlacksmith_0006.png"),
          PIXI.Texture.fromFrame("pictureBlacksmith_0007.png"),
        ]),
      }
    }

    for (let person in this.animations) {
      for (let mood in this.animations[ person ]) {
        this.animations[ person ][ mood ].animationSpeed = 0.2;
      }
    }

    events.on('talk', function() { this.talk.apply(this, arguments); }.bind(this))
  }

  talk(who, mood, text) {
    this.currentAnimation = this.animations[ who ][ mood ];

    this.image.removeChildren();
    this.image.addChild(this.currentAnimation);
    this.currentAnimation.play();

    this.textToShow = text
    this.textAppendCount = 0;
    this.interval = setInterval(this.appendText.bind(this), 40);
  }

  appendText() {
    if (this.textAppendCount == this.textToShow.length) {
      clearInterval(this.interval);
      this.currentAnimation.gotoAndStop(0);
    }

    this.text.setText( this.textToShow.substr(0, this.textAppendCount) );
    this.textAppendCount++;
  }

}

