export default class DeliveryArea extends PIXI.Sprite {

  constructor() {
    this.textures = {
      "normal": PIXI.Texture.fromFrame("deliverBtn.png"),
      "disabled": PIXI.Texture.fromFrame("deliverBtn-disabled.png"),
      "hover": PIXI.Texture.fromFrame("deliverBtn-hover.png")
    }
    super(this.textures['disabled']);

    this.interactive = true;

    this.mouseover = this.onMouseOver.bind(this)
    this.mouseout = this.onMouseOut.bind(this)

    this._enabled = false;
  }

  set enabled(enabled) {
    this._enabled = enabled;

    if (this._enabled) {
      this.setTexture(this.textures['normal']);

    } else {
      this.setTexture(this.textures['disabled']);
    }
  }

  onMouseOver() {
    console.log("Mouse hover...")
    if (this._enabled) {
      this.setTexture(this.textures['hover']);
    }
  }

  onMouseOut() {
    console.log("Mouse out...")
    if (this._enabled) {
      this.setTexture(this.textures['normal']);
    }
  }

}


