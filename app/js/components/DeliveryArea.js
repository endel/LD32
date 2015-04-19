export default class DeliveryArea extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.fromImage("images/deliverArea.png"));

    this.boxWidth = 252
    this.boxHeight = 268

    this.droppable({ accepts: "draggable" });
  }

}

