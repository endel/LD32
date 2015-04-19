export default class DeliveryArea extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.fromFrame("deliverBtn.png"));

    this.click = this.tap = this.doDeliver.bind(this);
  }

  doDeliver() {

  }

}


