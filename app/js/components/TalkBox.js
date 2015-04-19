export default class TalkBox extends PIXI.DisplayObjectContainer {

  constructor() {
    super();

    this.margin = 11;

    this.textToShow = "";
    this.textAppendCount = 0;

    this.bg = new PIXI.Sprite(PIXI.Texture.fromFrame("textBox.png"))
    this.addChild(this.bg);

    this.image = new PIXI.Sprite();
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

    events.on('talk', function() { this.talk.apply(this, arguments); }.bind(this))

    this.talk("pictureCustomer_0001.png", "Consectetur id quae ea eius atque! Totam quaerat sunt doloribus vero est doloribus sapiente unde doloribus, molestiae. Nihil sit non cumque rem facilis! Quas architecto consectetur veritatis corrupti magni voluptatum.")
  }

  talk(frameId, text) {
    this.image.setTexture(PIXI.Texture.fromFrame(frameId));
    this.textToShow = text
    this.textAppendCount = 0;
    this.interval = setInterval(this.appendText.bind(this), 10);
  }

  appendText() {
    if (this.textAppendCount == this.textToShow.length) {
      clearInterval(this.interval);
    }

    this.text.setText( this.textToShow.substr(0, this.textAppendCount) );
    this.textAppendCount++;
  }

}

