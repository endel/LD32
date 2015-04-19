export default class DeliveryArea extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.fromFrame("deliverArea.png"));

    this.droppable({ accepts: "draggable" });
  }

}

