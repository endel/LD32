export default class DeliveryArea extends PIXI.Sprite {

  constructor() {
    super(PIXI.Texture.fromImage("images/combiner.png"));

    this.width = 50;
    this.height = 50;

    this.droppable({ accepts: "draggable" });
  }

}

