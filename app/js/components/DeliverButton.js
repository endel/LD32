export default class DeliveryArea extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.fromImage("images/deliverBtn.png"));

    this.click = this.tap = this.doDeliver.bind(this);
  }

  doDeliver() {

  }

}


