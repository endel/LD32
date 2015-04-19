export default class TalkBox extends PIXI.DisplayObjectContainer {

  constructor() {
    super();

    this.margin = 11;
    this.boxHeight = 176;

    this.textToShow = ""
    this.textAppendCount = 0;

    this.bg = new PIXI.Sprite(PIXI.Texture.fromImage("images/textBox.png"))
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

    this.talk(PIXI.Texture.fromImage("images/picture.png"), "Consectetur id quae ea eius atque! Totam quaerat sunt doloribus vero est doloribus sapiente unde doloribus, molestiae. Nihil sit non cumque rem facilis! Quas architecto consectetur veritatis corrupti magni voluptatum.")
  }

  talk(texture, text) {
    this.image.setTexture(texture);
    this.textToShow = text
    this.interval = setInterval(this.appendText.bind(this), 10);
  }

  appendText() {
    if (this.textAppendCount == this.textToShow.length) {
      clearInterval(this.interval);
      return;
    }

    this.text.setText( this.textToShow.substr(0, this.textAppendCount) );
    this.textAppendCount++;
  }

}

